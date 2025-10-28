import Image from "next/image";

const Menu = () => {
  return (
    <>
      <div className="home-menu w-full min-h-[55vh] flex justify-center items-center flex-col ">
        <h1 className="text-[48px] [font-family:'Times_New_Roman',serif] leading-none mb-5">An Artful Journey Through Japanese Flavors</h1>
        <hr className="w-1/3 h-1 bg-gray-400  mb-15" />
        <div className="inner-home-menu w-full h-[50vh] pl-5 pr-5 flex justify-center items-center gap-10">
          <div className="card-menu w-1/4 h-full relative cursor-pointer ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-white absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-2xl font-bold ">
                Omakase - Chef`s Choice
              </h1>
              <p className="mb-3 text-l">
                “Leave it to the chef — a curated journey of seasonal flavors,
                prepared with mastery and heart
              </p>
            </div>
          </div>
          <div className="card-menu w-1/4 h-full relative cursor-pointer ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-white absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-2xl font-bold ">Sushi & Sashimi</h1>
              <p className="mb-3 text-l">
                “An artful harmony of rice and oceans finest, sliced with
                precision and served with elegance.”
              </p>
            </div>
          </div>
          <div className="card-menu w-1/4 h-full relative cursor-pointer ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-white absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-2xl font-bold ">Grilled & Hot Plates</h1>
              <p className="mb-3 text-l">
                “From the searing flame to the simmering broth — warmth crafted
                to comfort and delight.”
              </p>
            </div>
          </div>
          <div className="card-menu w-1/4 h-full relative cursor-pointer ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-white absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-2xl font-bold">
                Sweet Finale & Pairings
              </h1>
              <p className="mb-3 text-l">
                “A graceful ending — delicate desserts and curated drinks to
                complete your dining journey.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
{
  /* <div className="dishes w-[90%] h-full relative ">
            <Image
              src="/company/interior1.png"
              alt="Images"
              fill
              className="object-cover object-center rounded-4xl"
            />
            <div className="dishes-textbox w-3/4 h-1/2 bg-amber-50 absolute bottom-0 right-0 text-center flex justify-center items-center flex-col pl-4 pr-4">
              <h1 className="mb-3 text-4xl font-bold text-red-500">Dishes</h1>
              <p className="mb-3 text-l">
                “Crafted with passion, every dish tells a timeless story of flavor and tradition. A symphony on the plate, designed to be savored, not rushed.”
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
              <h1 className="mb-3 text-4xl font-bold text-red-500">Dessert</h1>
              <p className="mb-3 text-l">
                “The art of indulgence in its most delicate form. Each dessert is a whisper of sweetness, a graceful finale to your dining journey.”
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
              <h1 className="mb-3 text-4xl font-bold text-red-500">Baverages</h1>
              <p className="mb-3 text-l">
                “From the elegance of fine brews to the vitality of refreshing blends — every sip is curated to elevate your moment.”
              </p>
            </div>
          </div> */
}
