"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContext {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

type User = {
    id: number;
    name: string;
    email?: string;
} | null;


const UserContext = createContext<CartContext | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {

  const router = useRouter();  
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetch("/api/auth/me", {credentials : "include"})
      .then((res) => res.ok ? res.json() : null)
      .then((data) => setUser(data?.user))
  }, [])

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    

    const findItem = cart.find((cartItem) => cartItem.id === item.id)
    if(!user) {
      alert("You have to login first")
      router.push('/login')
      router.refresh();
      return;
    }

    if(findItem) {
        return alert("This item has been added to your cart")
    } else {
        return setCart((prev) => [...prev, item])
    }

     alert("Success added to your cart")


  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log(cart)
  },[cart])




  return (
    <UserContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCart() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
