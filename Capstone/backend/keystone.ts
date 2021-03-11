import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from "./schemas/User";
import {CartItem} from "./schemas/CartItem";
import { Product } from "./schemas/Product";
import { insertSeedData } from './seed-data';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { sendPasswordResetEmail } from './lib/mail';
import {extendGraphqlSchema} from "./mutations/index"
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },


  //  In order for password reset to show up in GraphQL playground, this line of code need to be here. Just console log the (args) on initial setup
  passwordResetLink: {
  async sendToken(args) {
    console.log(args);
    sendPasswordResetEmail(args.token, args.identity)
  }
}});




export default withAuth(
config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    async onConnect(keystone) {
      console.log('Connected to the database!');
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
    // TODO: Add data seeding here
  },

  extendGraphqlSchema,

  lists: createSchema({
    // Schema items go in here
    User, Product, CartItem
  }),
  ui: {
    // TODO: change this for roles
    
    isAccessAllowed: ({ session }) => {
      // console.log("session: ", session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here
  
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
  
}));