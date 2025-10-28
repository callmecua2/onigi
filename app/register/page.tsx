"use client";
export const runtime = 'nodejs'
import { useRouter } from "next/navigation";
import React, { useState } from "react";




export default function Register() {

  const router = useRouter();

  const [form, SetForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    SetForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submitButton(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      router.push('./verify')
      router.refresh();
      SetForm({ name: "", email: "", password: "" });
    }
  }

async function clickButton() {
  
  const res = await fetch("/api/auth/register", {
    method: "GET"  
  })

  const data = await res.json();
  console.log(`Nilai angka random : ${data.randomnumber}`)
  console.log(data)
  
}


  return (
    <>

      <button onClick={clickButton} className="text-5xl bg-amber-400 pl-5 pr-5 mt-10 ml-10">Test Email</button>


      <div className="login-page w-full h-screen flex justify-center items-center">
        <div className="w-1/3 pt-7 pb-7 rounded-3xl bg-white flex flex-col items-center justify-center">
          <form
            onSubmit={submitButton}
            name="signIn-form"
            className="md:w-96 w-80 flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>

            <p className="text-sm text-gray-500/90 mt-3">
              Welcome ! Please register here
            </p>

            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-gray-300/90"></div>

              <div className="w-full h-px bg-gray-300/90"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#6B7280"
                />
              </svg>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="Username"
                className="bg-transparent text-black placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#6B7280"
                />
              </svg>

              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Email"
                className="bg-transparent text-black placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#6B7280"
                />
              </svg>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                placeholder="Password"
                className="bg-transparent text-black placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
              <div className="flex items-center gap-2">
                <input className="h-5" type="checkbox" id="checkbox" />

                <label className="text-sm" htmlFor="checkbox">
                  Remember me
                </label>
              </div>

              <a className="text-sm underline" href="#">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Login
            </button>

            <p className="text-gray-500/90 text-sm mt-4">
              Don’t have an account?
              <a className="text-indigo-400 hover:underline" href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
