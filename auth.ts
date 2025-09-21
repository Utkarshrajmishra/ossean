import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "./lib/prisma";
import { JWT } from "next-auth/jwt";
export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.AUTH_CLIENT_ID!,
            clientSecret:process.env.AUTH_CLIENT_SECRET!,
        }),
       

        
    ],
    callbacks:{
        async signIn({user}:any){
            const {email, name, image}=user;
            try{
                if(email && name && image){
                    const existingUser=await prisma.account.findUnique({where:{email}})
                    if(existingUser) return true
                    await prisma.account.create({
                        data:{name,email, image}
                    });
                }
                                    return true

            }
            catch(error){
                return false
            }
        },

        async jwt({token, account, user}: {token:JWT, account:any, user:any}){
            if(account && user){
                const {email}=user
                const newUser=await prisma.account.findUnique({where:{email}})
                if(newUser) token.id=newUser.id
                return token
            }
            return token
        },

        async session({session, token}:{session:any, token: JWT}){
            Object.assign(session, {id:token.id? token.id : ''})
            return session
        }
    }
}

