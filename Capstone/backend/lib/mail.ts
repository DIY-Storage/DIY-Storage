import  { getTestMessageUrl } from "nodemailer";
import 'dotenv/config';

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


function makeANiceEmail(text: string): string
{
    return `
        
			<div style="
			border: 1px solid black;
			padding: 20px;
			font-family: sans-serif;
			line-height: 2;
			font-size: 20px;
			">
				<h2>Hi there!</h2>
				<p>${text}</p>
				<p>😁💰 - DIY Storage</p>
			</div>
    `
}

// custom type 
/*
interface MailResponse {
    message: string;
}
*/

/*
    To obtain this, just type in the email in the password reset form. The console will poop out some information

    run that information through this site: https://jvilk.com/MakeTypes/
*/
export interface MailResponse {
    accepted?: (string)[] | null;
    rejected?: (null)[] | null;
    envelopeTime: number;
    messageTime: number;
    messageSize: number;
    response: string;
    envelope: Envelope;
    messageId: string;
  }
  export interface Envelope {
    from: string;
    to?: (string)[] | null;
  }
  

export async function sendPasswordResetEmail(resetToken: string, to: string): Promise<void>
{
    const info = await transporter.sendMail({
        to,
        from: 'sickfits@example.com',
        subject: 'Your password reset token',
        html: makeANiceEmail(`Your password reset token is here! 
            <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click here to reset </a>
        `)
    }) as MailResponse;
    // console.log(info);
    if(process.env.MAIL_USER.includes('ethereal.email'))
    {
        //This just shows the link in the terminal
        console.log(`📧Message sent! Preview it at ${getTestMessageUrl(info)} 📧`)
    }
}