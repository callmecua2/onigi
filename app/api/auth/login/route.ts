import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/auth";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const { name, password } = body;

        const ValidateUser = await prisma.user.findFirst({
            where: { name }
        })

        if (!ValidateUser) {
            return NextResponse.json(
                { message: "Error, user not found" },
                { status: 401 }
            )
        }

        if (name !== ValidateUser.name) {
            return NextResponse.json(
                { message: "Error, user not found" },
                { status: 401 }
            )
        }

        if (password !== ValidateUser.password) {
            return NextResponse.json(
                { message: "Wrong password" },
                { status: 401 }
            )
        }

        if (name === ValidateUser.name && password === ValidateUser.password) {
            console.log('login berhasil')
        }


        const token = generateToken({id: ValidateUser.id, username: ValidateUser.name })

        const response = NextResponse.json(
            {
                message: "Login success",
                user: {
                    id: ValidateUser.id,
                    username: ValidateUser.name
                }
            },
            { status: 200 }
        )

        response.cookies.set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60,
            path: "/"
        })
        
        return response

    } catch (error) {
        console.log(`Error saat verifikasi : ${error}`)
        return NextResponse.json(
            { message: "Error OTP verification" },
            { status: 500 }
        )
    }

}