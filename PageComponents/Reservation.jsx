import "./reservation.css"

const Reservation = () => {
  return (
    <>
        <div className="banner w-full h-screen mt-10 flex ">
          <div className="imgside w-1/2 h-full flex justify-end ">
            <div className="img-content w-3/4 h-full flex justify-center items-center  ">
              <img className="image-banner" src="/food/food1.webp" alt="images" />
            </div>
          </div>
          <div className="text-boxside w-1/2 h-full ">
            <div className="text-boxside-content w-3/4 h-full flex flex-col justify-center  ">
              <h3>Immerse yourself in Asian experience.</h3>
              <p className="mt-10">Savor sushi perfection—crafted with tradition, fresh ingredients, and a passion for detail.</p>
              <p className="mt-5">The artistry of sushi and rolls, meticulously crafted with traditional Japanese recipes and an eye for detail. Savor the perfect harmony...</p>
              <div className="textbox-button mt-5">
                <button className="mr-5 mt-10">Food Menu</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Reservation;
