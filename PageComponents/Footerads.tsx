const FooterAds = () => {
  return (
    <div className="footer-adss  flex justify-between flex-col xl:flex-row xl:justify-center mt-20 cursor-default">
      <div className="contact-box h-96 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] xl:w-2/5 xl:mr-5">
        <div className="some-text mt-16 ml-16 w-2/3 xl:w-full xl:ml-0 text-left">
          <h3 className=" text-2xl xl:ml-16 ">GET IN TOUCH</h3>
          <h2 className=" text-4xl font-bold mt-10 xl:ml-16">CONTACT US</h2>
          <hr className=" w-1/6 h-1 mt-5 xl:ml-16 bg-black" />
          <span>
            <p className="mt-9 xl:ml-16">Jln Cempaka Wangi No 22</p>
            <p className=" xl:ml-16">Bandung - Indonesia</p>
          </span>
          <h2 className=" text-2xl xl:ml-16  font-bold mt-9">
            +6221.2002.2012
          </h2>
        </div>
      </div>

      <div className="contact-box bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] mt-8 pb-4 xl:w-2/5 xl:mt-0 xl:pb-0 xl:ml-5">
        <div className="some-text mt-16 ml-16 w-4/5 xl:w-full xl:ml-0 text-left">
          <h3 className=" text-2xl xl:ml-16 ">RESERVATION</h3>
          <h2 className=" text-4xl xl:ml-16 font-bold mt-10">BOOK A TABLE</h2>
          <hr className=" w-1/6 h-1 bg-black xl:ml-16 mt-5" />
          <p className=" mt-9 xl:ml-16 xl:text-sm">
            Plan ahead and book your table to savor the taste of Japan with
            comfort and style
          </p>
          <button className=" w-1/2 h-10 md:h-14 md:text-xl mt-5 lg:w-1/4 xl:ml-16 bg-black text-white cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterAds;
