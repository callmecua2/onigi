"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/app/context/context";

const Navbar = () => {
  type User = {
    id: number;
    name: string;
    email?: string;
  } | null;

  const { cart, setCart } = useCart();

  const [user, setUser] = useState<User>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data?.user));
  }, []);

  const increment = (itemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (itemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  function LoginButton(){
    return (
      <div className="for-login">
        <Link href={"/login"}>
          <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Login
          </button>
        </Link>
      </div>
    );
  };

  function ProfileButton () {
    return (
      <div className="for-profile">
        <Link href={"/user"}>
          <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            {user?.name}
          </button>
        </Link>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link href="/">
        <h1 className="text-black text-4xl [font-family:'Times_New_Roman',serif]">
          Onigi
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-black">
        <Link href={"/"}>
          <p className="block">Home</p>
        </Link>
        <Link href={"/about"}>
          <p className="block">About</p>
        </Link>
        <Link href={"/menu"}>
          <p className="block">Menu</p>
        </Link>
        <Link href={"/contact"}>
          <p className="block">Contact</p>
        </Link>

        <div className="relative cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                  stroke="#615fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>
                  <SheetDescription>
                    Make sure you check your item before checkout
                  </SheetDescription>
                  <div className="cart-components w-full">
                    {cart.map((item) => {
                      return (
                        <div
                          className="card-items-component w-3/4 mt-5 flex flex-col items-center border-2 border-black rounded-xl"
                          key={item.id}
                        >
                          <div className="card-items-images w-4/6">
                            <h1 className="text-center">{item.name}</h1>
                            {/* <img className="w-full rounded-xl mt-3" src={item.images[0]} alt="img" /> */}
                            <div className="value-button flex justify-center items-center">
                              <button
                                className="w-10 font-bold text-xl"
                                onClick={() => increment(item.id)}
                              >
                                &#43;
                              </button>
                              <p className="text-xl">{item.quantity}</p>
                              <button
                                className="w-10 font-bold text-xl"
                                onClick={() => decrement(item.id)}
                              >
                                &#8722;
                              </button>
                            </div>
                            <p className="text-center text-xl font-bold">
                              Price : ${item.quantity * item.price}
                            </p>
                          </div>
                          <button className="w-2/3 h-10 bg-slate-500 mt-4 mb-4 rounded-sm text-xl font-semibold">
                            Buy Now
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {user?.name ? <ProfileButton /> : <LoginButton />}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link href={"/"}>
          <p className="block">Home</p>
        </Link>
        <Link href={"/menu"}>
          <p className="block">Menu</p>
        </Link>
        <Link href={"/about"}>
          <p className="block">About</p>
        </Link>
        <Link href={"/contact"}>
          <p className="block">Contact</p>
        </Link>

        <Link href={"/login"}>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
