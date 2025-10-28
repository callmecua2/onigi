import "./about.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/company/outside.png",
  "/company/interior1.png",
  "/company/interior2.png",
  "/company/private.png",
  "/company/kitchen.png",
];

const About = () => {
  return (
    <>
      <div className="about-section w-full h-[65vh] flex justify-center items-center gap-5 mt-10">
        <div className="company-profile w-[35%] h-full ">
          <div className="company-profile-innertext">
            <h1 className="text-4xl mb-3 mt-5">WHO WE ARE</h1>
            <h2 className="text-4xl mb-5">Japanese Cuisines & Sushi Bar.</h2>
            <p className="mb-5 text-xl">
              We bring authentic Japanese flavors crafted from the freshest
              ingredients by our experienced chefs. Every sushi, ramen, and
              signature dish is made with dedication to deliver unforgettable
              harmony of taste.
            </p>
            <p className="mb-5 text-xl">
              More than just a restaurant, we are a place where the art of
              Japanese cuisine meets warm ambiance and exceptional service —
              creating a truly remarkable dining experience for every visit.
            </p>
            <button className=" w-[250px] h-[50px] text-2xl bg-red-500 text-white outline=none cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="company-image w-[55%] h-full flex justify-center items-start ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-5/6 mt-5 "
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div>
                    <Card className="bg-transparent shadow-none border-none ">
                      <CardContent className=" w-full h-full  flex aspect-square items-center justify-center">
                        <img src={src} alt="images" className="w-full h-full" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default About;
