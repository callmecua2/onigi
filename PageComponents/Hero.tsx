import "./hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero relative w-full min-h-screen flex items-center">
        <picture className="absolute inset-0 z-0">
          <source media="(min-width: 769px)" srcSet="/bg/backimage.webp" />
          <img
            src="/bg/bgimg.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="inner-hero relative z-10 w-2/4 ml-10 text-white">
          <h1>
            Authentic Tastes. Authentic Atmosphere. <br /> Japanese Cuisines &
            Sushi Bar
          </h1>
          <br />
          <div className="hero-button w-full">
            <Link href="/login">
              <button className="w-[250px] h-[50px] bg-red-500 ml-2 mr-2 outline-none text-2xl font-normal">
                Reservation
              </button>
            </Link>

            <Link href={"/menu"}>
              <button className=" hero-menu-button w-[250px] h-[50px] ml-2 mr-2 outline-none text-2xl font-normal">
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
