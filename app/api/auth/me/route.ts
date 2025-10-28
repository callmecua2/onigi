import { verifyToken } from "@/lib/auth";
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(req: NextRequest) {
    try {
        
    const token = req.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const user = await prisma.user.findFirst({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true },
        });

        if (!user) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        return NextResponse.json({ user }, { status: 200 });

    } catch (error) {
        console.log(`Error : ${error}`)
        return NextResponse.json(
            {message : error},
            {status : 500}
        )        
    }
}