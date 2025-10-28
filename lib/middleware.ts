// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { verifyToken } from "./auth";
// import { JwtPayload } from "jsonwebtoken";

// async function middleware(req: NextRequest) {

//     try {
//         const token = req.cookies.get('auth_token')?.value
        
//         if(!token) {
//             return NextResponse.json({user: null}, {status: 200})
//         }

//         const decoded = verifyToken(token) as JwtPayload | null
//         if(!decoded) {
//             return NextResponse.json({user: null}, {status: 200})
//         }


//          const user = await prisma.user.findFirst({
//             where: { id: decoded.id },
//             select: { id: true, name: true, email: true },
//         });

//         if (!user) {
//             return NextResponse.json({ user: null }, { status: 200 });
//         }

//         return NextResponse.json({ user }, { status: 200 });
    
    
        
//     } catch (error) {
//         return NextResponse.json({message: error}, {status:500})
//     }


// }