import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import "./contact.css";
import food1 from "../../assets/food/food1.webp"

const Contacts = () => {
  return (
    <>
      <div className="contact-section w-ful h-[90vh] flex justify-center items-center gap-20 ">
        <div className="image-contact-section w-[45%] h-full grid ">
          <div className="card1">
            <Image
                src={food1}
                alt="images"
                width={600}
                height={400}
                objectFit="cover"
                objectPosition="center"
                className="image-card1"
            />
          </div>
          <div className=" card2 bg-red-700 text-white p-6 md:p-8 rounded-lg max-w-md mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Come and visit us</h2>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Phone size={30} /> <span>(414) 857 – 0107</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={30} /> <span>happytummy@restaurant.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={30} />{" "}
                <span>
                  837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-contact-section w-[45%] h-[65vh] flex flex-col justify-center">
          <h1 className="text-7xl mb-5 w-3/4">
            We provide healthy food for your family.
          </h1>
          <p className="text-2xl mb-5 w-3/4">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="text-2xl mb-5 w-3/4">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className=" font-semibold text-center w-[250px] pt-[10px] pb-[10px] bg-[#f00606] text-3xl rounded-2xl outline-none cursor-pointer">
            Book A Table
          </button>
        </div>
      </div>
    </>
  );
};

export default Contacts;
