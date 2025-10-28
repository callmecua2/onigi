"use client";
import "./home.css";
import Hero from "@/PageComponents/Hero";
import About from "@/PageComponents/About";
import Contacts from "../components/ui/Contacts";
import Services from "@/PageComponents/Services";
import Menu from "@/PageComponents/Menu";
import Reservation from "@/PageComponents/Reservation"
import Review from "@/PageComponents/Review";
import FooterTagline from "@/PageComponents/FooterTagline";
import FooterAds from "@/PageComponents/Footerads";
import Footerbox from "@/PageComponents/Footerbox";


export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <Contacts />
      <Services />
      <Menu />
      <Reservation />
      <Review />
      <FooterTagline />
      <FooterAds />
      <Footerbox />
    </>
  );
}

// style={{backgroundImage: `url(/bg/banner.webp)`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}

{
  /* <div
        className="images w-full min-h-[50vh] flex justify-center items-center relative  bg-lime-300 background-image"
        style={{
          backgroundImage: `url(/bg/banner.webp)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="textbox text-white">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            labore illo repellendus? Fugit explicabo ipsam numquam odio id,
            repellat nihil magnam incidunt, error expedita, maiores molestias
            nostrum fugiat quo veniam?
          </p>
          <button>Click Me</button>
        </div>
      </div> */
}
{
  /* <div className="featured-menu w-full min-h-screen mt-10 flex flex-col items-center bg-blue-400 ">
        <div className="featured-menu-text text-center">
          <h1 className="text-4xl font-bold">Featured Menu</h1>
          <p className="text-red-600 text-2xl italic">
            ~ Each of our menus is designed to pamper the palate, combining the
            best quality and special taste ~
          </p>
        </div>
        <div className="featured-menu-content flex flex-col w-1/2 mt-10 bg-amber-300">
          <table className=" w-full">
            <tbody>
              {bestMenu.map((item) => {
                return (
                  <tr key={item.id} className="table-row w-3/4 text-left">
                    <td className="table-cell mt-3">
                      <h6 className="menu-name md:text-xl font-semibold mt-3 ml-5">
                        {item.name}
                      </h6>
                      <p className="menu-description md:text-lg mt-1 mb-5 ml-5">
                        {item.description}
                      </p>
                    </td>
                    <td className=" pr-3 flex justify-center">
                      <h6 className="menu-price md:text-xl mt-3 font-semibold text-red-600">
                        ${item.price}
                      </h6>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */
}
{
  /* <div className="home-menu w-full min-h-[55vh] flex justify-center items-center ">
        <div className="inner-home-menu  w-[95%] h-[50vh] flex justify-center items-center gap-10">
          <div className="dishes w-[90%] h-full relative ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-4xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-amber-50 absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-4xl font-bold text-red-500">Dishes</h1>
              <p className="mb-3 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                deserunt, ea delectus natus cum unde hic eveniet suscipit alias
                accusantium quod vitae voluptatibus. Beatae inventore, incidunt
                exercitationem pariatur excepturi cumque.
              </p>
            </div>
          </div>
          <div className="dessert w-[90%] h-full relative ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-4xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-amber-50 absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-4xl font-bold text-red-500">Dishes</h1>
              <p className="mb-3 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                deserunt, ea delectus natus cum unde hic eveniet suscipit alias
                accusantium quod vitae voluptatibus. Beatae inventore, incidunt
                exercitationem pariatur excepturi cumque.
              </p>
            </div>
          </div>
          <div className="baverages w-[90%] h-full relative ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-4xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-amber-50 absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-4xl font-bold text-red-500">Dishes</h1>
              <p className="mb-3 text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                deserunt, ea delectus natus cum unde hic eveniet suscipit alias
                accusantium quod vitae voluptatibus. Beatae inventore, incidunt
                exercitationem pariatur excepturi cumque.
              </p>
            </div>
          </div>
        </div>
      </div> */
}
