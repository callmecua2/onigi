const Footerbox = () => {
  return (
    <>
      <div className="footerbox-parent mt-10 mb-36 flex justify-center ">
        <div className="contact-icon flex justify-center items-center flex-col w-10/12 mt-8 pb-5 xl:w-2/4 xl:mt-10 bg-white shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] ">
          <h2 className="text-5xl xl:text-4xl mb-5 mt-5 font-bold cursor-pointer">
            Onigi
          </h2>
          <p className=" text-2xl xl:text-base mb-6">
            Everything we serve is made in house from the best ingredients.
          </p>
          <hr className="w-1/4 mb-10 h-1 rounded-full bg-red-500" />
          <div className="social-media w-full flex justify-center items-center">
            <img
              src="/icon/instagram.png"
              className=" w-12 h-12 md:w-14 md:h-14 xl:w-10 xl:h-10 ml-8 mr-8 cursor-pointer"
              alt="feane"
            />
            <img
              src="/icon/whatsapp.png"
              className=" w-12 h-12 md:w-14 md:h-14 xl:w-10 xl:h-10 cursor-pointer"
              alt="feane"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerbox;
