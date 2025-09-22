import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const session=await getServerSession(authOptions)
        if(session && session?.newUser) return NextResponse.json({
            message:"User already registered",
            status:500
        })
        if(session && session?.id && !session?.newUser){
            const body=await req.json();
            const {userName, id, bio}=body
            await prisma.user.create({
                data:{
                  id: id,
                  userName: userName,
                  bio:bio 
                }
            })
            return NextResponse.json({
                message:"User registered successfully",
                status:200
            })
        }

        return NextResponse.json({
            message:"User not found",
            status:401
        })
    } catch (error) {
        return NextResponse.json({
            message:'Internal server error',
            status:500
        })
    }
}