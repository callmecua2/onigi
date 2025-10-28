export const runtime = 'nodejs'
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function POST(req: NextRequest) {

  try {

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const body = await req.json();
    const { name, email, password, } = body;


    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required field" },
        { status: 400 }
      )
    }

    const tempuser = await prisma.tempUser.create({
      data: {
        name,
        email,
        password,
        OTP: otp
      }
    })

    console.log(`Temporary user created: ${tempuser.email}`);


    const response = NextResponse.json(
      {
        message: `OTP has sent to your email ${otp}`,
        success: true
      },
      {
        status: 201
      }
    )


    response.cookies.set(
      'pending-verification',
      email,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "lax",
        maxAge: 60 * 15,
        path: '/'
      }
    )

    return response

  } catch (error) {
    console.log(`Registration Error : ${error}`)
    return NextResponse.json(
      { message: "Registration Error" },
      { status: 500 }
    )
  }

}