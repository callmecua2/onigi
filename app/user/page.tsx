"use client";
import { useRouter } from "next/navigation";
import "./user.css";
import { useCart } from "../context/context";
import { useState } from "react";

export default function User() {
  const router = useRouter();

  async function logout() {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (response.ok) {
        alert("Log Out Success");
        router.push("/");
      }
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  }

  const { cart, setCart } = useCart();

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

  const [active, setActive] = useState(2);
  function handleActive (index : number) {
    setActive(index)
  }

  function CartEmpty() {
    return(
      <>
        <h1>Opsss, there is no items in your cart</h1>
      </>
    )
  }

  return (
    <>
      <div className="user-page">
        <div className="main w-full h-screen">
          <div className="left-Sidebar">
            <div className="left-sidebar-wrapper flex justify-center items-center flex-col w-full h-5/6">
              <div className="left-sidebar-content">
                <h1 className="text-2xl font-semibold cursor-default">
                  User Profile
                </h1>
                <ul>
                  <li onClick={()=>handleActive(0)} className={`${active === 0 ? "active" : ""  }`}>User Info</li>
                  <li onClick={()=>handleActive(1)} className={`${active === 1 ? "active" : ""  }`}>Favourites</li>
                  <li onClick={()=>handleActive(2)} className={`${active === 2 ? "active" : ""  }`}>Your Cart</li>
                  <li onClick={()=>handleActive(3)} className={`${active === 3 ? "active" : ""  }`}>Settings</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="user-content">
            {/* <div className="userContent user-content-info"></div>
            <div className="userContent user-content-favourites"></div> */}
            <div className="userContent user-content-cart flex  items-center flex-col overflow-y-scroll">
              {cart.length < 1 ? <CartEmpty /> : cart.map((item) => {
                return (
                  <div
                    className="card-items-component w-3/4 flex mt-1 mb-6 flex-col items-center border-2 border-black rounded-xl"
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
            {/* <div className="userContent user-content-settings"></div> */}
          </div>
          <div className="UserInfo flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="relative flex justify-center items-center flex-col">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="userImage1"
                />
                <h2 className="mt-5 text-2xl text-center font-semibold">Hello : Name</h2>
                <button onClick={logout} className="w-[150px] h-[50px] cursor-pointer border-2 border-black mt-5">Logout</button>
              </div>
             
            </div>
          </div>
          <div className="UserCart">
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
        <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
        <hr className="border-gray-300 my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

          <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-300" />

        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>$20</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>$20</span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Total Amount:</span>
            <span>$20</span>
          </p>
        </div>

        <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
          Place Order
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}
