export const runtime = 'nodejs'
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'
import { prisma } from "@/lib/prisma";


// export async function sendTestEmail () {
//     const testUser = await nodemailer.createTestAccount();


//     const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: testUser.user,
//       pass: testUser.pass,
//     },
//   });

// const info = await transporter.sendMail({
//     from: `"Portfolio App" <${testUser.user}>`,
//     to: "demo@example.com", 
//     subject: "Test Email from Ethereal",
//     html: `
//       <h3>Halo 👋</h3>
//       <p>Ini contoh email testing via Ethereal.</p>
//       <p><b>Tidak benar-benar dikirim ke penerima asli</b>.</p>
//     `,
//   });


//   console.log("Email berhasil dikirim (simulasi).");
//   console.log("Preview di sini:", nodemailer.getTestMessageUrl(info));

// }

// export async function GET(req: Request) {
//   try {
//     const testUser = await nodemailer.createTestAccount();

//     const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: testUser.user,
//       pass: testUser.pass,
//     },
//   });

// const info = await transporter.sendMail({
//     from: `"Portfolio App" <${testUser.user}>`,
//     to: "demo@example.com", 
//     subject: "Test Email from Ethereal",
//     html: `
//       <h3>Halo 👋</h3>
//       <p>Ini contoh email testing via Ethereal.</p>
//       <p><b>Tidak benar-benar dikirim ke penerima asli</b>.</p>
//     `,
//   });


//   console.log("Email berhasil dikirim (simulasi).");
//   console.log("Preview di sini:", nodemailer.getTestMessageUrl(info));



//   } catch (error) {
//     console.log(`Error Message : ${error}`)
//     return NextResponse.json(
//       {message: `Error message : ${error}`},
//       {status: 500}
//     )
//   }
// }



// export async function GET() {
//   try {

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     console.log(ranNum)
//     return NextResponse.json(
//       {randomnumber: ranNum},
//       {status: 201}
//     )

//   } catch (error) {
//     console.log(error)
//     return NextResponse.json(
//       {message: `Error : ${error}`},
//       {status: 501}
//     )
//   }


// }


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

    // const user = await prisma.user.create({
    //   data : {
    //     name,
    //     email,
    //     password,
    //   }
    // })


    const tempuser = await prisma.tempUser.create({
      data: {
        name,
        email,
        password,
        OTP: otp
      }
    })


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