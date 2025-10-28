const FooterTagline = () => {
    return(
        <div className="footer-tagline w-full h-96 mt-10 flex justify-center text-white bg-stone-600">
          <div className="footer-textbox w-10/12 flex justify-center items-center flex-col">
            <h3 className=" text-xl">TRADITIONAL & AUTHENTIC TASTE</h3>
            <h2 className=" text-3xl font-bold mt-6 mb-4">
              Beyond The Boundaries of Taste.
            </h2>
            <button className=" bg-red-600 w-3/6 h-14 xl:w-1/5 text-xl">
              Discover More
            </button>
          </div>
        </div>
    )
}

export default FooterTagline;