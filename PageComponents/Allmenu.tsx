"use client";

import { useState } from "react";
import dishesmenu from "../menu/menu";
import Menucard from "@/components/ui/menucard";

export default function Allmenu() {
  const [menu, setMenu] = useState(dishesmenu);
  const [cartItem, setCartItem] = useState([]);

  console.log(menu);

  const addButton = (item: any) => {
    setCartItem((prev) => prev);
  };

  return (
    <>
      <style>{`

                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }

            `}</style>

      <div className="card-images flex justify-center flex-wrap gap-10">
        {menu.map((item) => {
          return (
            <Menucard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}

      </div>
    </>
  );
}
