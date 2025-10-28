import food from "../services/food.png";
import chef from "../services/chef.png";
import fork from "../services/fork.png";
import leaf from "../services/leaf.png";
import "./services.css";

const Services = () => {
  return (
    <>
      <div className="services w-full h-screen mt-10 flex justify-center items-center flex-col ">
        <h1 className="text-7xl mb-5">Why Choose Us</h1>
        <div className="services-wrapper w-full h-7/12 flex justify-center items-center gap-5 ">
          <div className="card">
            <img src="../services/leaf.png" alt="images" />
            <div className="card-textbox">
              <h1>Fresh Ingredients</h1>
              <p>We use only the freshest ingredients for all our dishes</p>
            </div>
          </div>
          <div className="card">
            <img src="../services/chef.png" alt="images" />
            <div className="card-textbox">
              <h1>Expert Chefs</h1>
              <p>Our experienced chefs create culinary masterpieces</p>
            </div>
          </div>
          <div className="card">
            <img src="../services/fork.png" alt="images" />
            <div className="card-textbox">
              <h1>Cozy Atmosphere</h1>
              <p>Enjoy your meal in a warm and inviting setting</p>
            </div>
          </div>
          <div className="card">
            <img src="../services/food.png" alt="images" />
            <div className="card-textbox">
              <h1>Quality Services</h1>
              <p>We are dedicated to providing the best services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
