import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        const token = req.cookies.get('auth_token')?.value
        console.log(`Token yang akan dihapus : ${token}` || "tidak ada token")

        const response = NextResponse.json(
            { message: "Logout Success", success: true },
            { status: 200 }
        )

        response.cookies.set('auth_token', "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0,
        })

        return response


    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Logout failed", success: false },
            { status: 500 }
        )
    }
}