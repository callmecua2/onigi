'use client'

import dishesMenu from "@/menu/menu";
import "./id.css";
import { useCart } from "@/app/context/context";
import { useParams } from "next/navigation";

// export function getStaticParams() {
//   return dishesMenu.map((menu) => ({
//     id: menu.id.toString(),
//   }));
// }

export default function MenuPage() {

  const { id } = useParams()
  const { addToCart } = useCart();

  const filtermenu = dishesMenu.find(
    (menu) => menu.id.toString() === id
  );
  


  if (!filtermenu) return <div className="p-8">Menu not found</div>;

  return (
    <div className="cart-body">
      <div className="cart-body-wrapper flex flex-col lg:flex-row ">
        <div className="product-content ">
          <div className="display-image">
            <img
              className="w-72 h-48 object-cover"
              src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
              alt="image"
            />
          </div>
        </div>
        <div className="product-description">
          <div className="title-content desc">
            <h2 className="text-xl font-bold">{filtermenu.name}</h2>
          </div>
          <div className="description-content desc">
            <h2 className="text-xl font-bold">Description</h2>
            <p>{filtermenu.description}</p>
          </div>
          <div className="price-content desc">
            <h1 className="text-xl font-bold">Price</h1>
            <p className=" text-xl font-semibold">${filtermenu.price}</p>
          </div>
          <div className="Checkout-button desc">
            <button
              className="checkout"
              onClick={() =>
                addToCart({
                  id: filtermenu.id,
                  name: filtermenu.name,
                  description: filtermenu.description,
                  price: filtermenu.price,
                  quantity: 1,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
