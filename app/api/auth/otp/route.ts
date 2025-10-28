import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const { otp } = body
        const email = req.cookies.get('pending-verification')?.value

        if (!email) {
            return NextResponse.json(
                { message: "Session expired, please register again" },
                { status: 400 }
            )
        }

        // check otp exist or no
        if (!otp) {
            return NextResponse.json(
                { message: "OTP required" },
                { status: 400 }
            )
        }

        const tempUser = await prisma.tempUser.findUnique({
            where: { email }
        })

        if(!tempUser) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 400 }
            )
        }

        if (tempUser?.OTP !== otp) {
            return NextResponse.json(
                { message: "Invalid OTP" },
                { status: 400 }
            )
        }

        const newUser = await prisma.user.create({
            data: {
                name: tempUser!.name,
                email: tempUser!.email,
                password: tempUser!.password
            }
        })


        await prisma.tempUser.delete({
            where: { email }
        })



        const response = NextResponse.json(
            {
                message: "Verification succesfull",
                user: {
                    id: newUser.id,
                    username: newUser.name,
                    email: newUser.email
                }
            },
            {
                status: 200
            }
        )

        response.cookies.delete('pending-verification');

        return response


    } catch (error) {
        console.log(`Error saat verifikasi : ${error}`)
        return NextResponse.json(
            { message: "Error OTP verification" },
            { status: 500 }
        )
    }

}