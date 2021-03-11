// This is still VERY confusing, refer back to video #46

import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { CartItemCreateInput } from ".././.keystone/schema-types";
import { Session } from "../types";


interface Arguments {
    productId: string
}

// https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments 
/*
    This is what's called resolver, and the resolver takes in 4 fields

    addToCart(parent, args, context, info)
 */
 async function addToCart(
    root: any,
    {productId} : Arguments,
    context: KeystoneContext
    ) :  Promise<CartItemCreateInput>{

        // 1. Query the current user
        const sesh = context.session as Session;

        if(!sesh.itemId)
        {
            throw new Error("You must be logged in to do this")
        }
        
        // [context.session] has all the same information as you were to query it from session in [keystone.ts]
        // console.log("context: ", context.session);
        // [context.lists] has all the information on accessing each schema in the backeend
        // console.log("context.lists : ", context.lists);

        // 2. Query the current user's cart (the reason we use [findMany()] here is because these fields are not unique)
            // This will remove the need to fetch data from graphQl, just do it here. Video: #46
        const allCartItem = await context.lists.CartItem.findMany({
            //productId is the argument that's being passed in
            where: { user: { id: sesh.itemId }, product: { id: productId } },
            // this fucking field need to be plural...
            resolveFields: 'id, quantity',

            // allCartItem will return an array
        });
        
        // destructure the first item into an existingCartItem
        const [ existingCartItem ] = allCartItem;
        

        // 3. See if the current item is in their cart

        // 4. If it is, increment by 1
        if(existingCartItem) {
            console.log(`There are already ${existingCartItem.quantity} increment by 1`)
            return  await context.lists.CartItem.updateOne({
                id: existingCartItem.id,
                data: { quantity: existingCartItem.quantity + 1 }
            })
        }

        

        // 5. If it isn't, create a new cart item
        return await context.lists.CartItem.createOne({
            data: {
                product: { connect: {id: productId }},
                user: { connect: {id: sesh.itemId }},
            }
        })
    }



    export default addToCart;