"use client";
import { useState } from "react";

export default function Verify() {
  const [otp, setOtp] = useState("");

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();


    try {
      const res = await fetch("api/auth/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
        credentials: "include",
      });

      if (res.ok) {
        console.log("Berhasil");
        alert("berhasil");
      } else {
        alert("Verifikasi gagal");
      }
    } catch (error) {
      console.log(`Verification sent Error : ${error}`);
      console.error("Verification error:", error);
    }
  }

  return (
    <>
      <div className="main w-full h-screen flex justify-center items-center flex-col">
        <div className="verify-wrapper w-1/3 h-1/2 flex justify-center items-center flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl">
          <h1 className="text-4xl font-bold">
            We have sent you verification code
          </h1>
          <p className="text-2xl font-semibold">Please check your email</p>
          <form
            onSubmit={handleVerify}
            className="input-box mt-10 flex justify-center items-center flex-col "
          >
            <input
              onChange={(e) => setOtp(e.target.value)}
              className=" border-3 border-black w-[300px] h-[50px] pl-3 font-semibold outline-0"
              type="text"
              placeholder="Write your verification code here"
            />
            <button
              type="submit"
              className="w-[200px] h-[50px] mt-10 bg-stone-700 text-white border-2 outline-0 rounded-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
