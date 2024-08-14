import React from "react";
import { Link } from "react-router-dom";
import LitLoomHome from "./images/LitLoomHomePage.png";
import CarWaveHome from "./images/HomePageCarWave.png";

const MobileApps = () => {
  return (
    <div className="">
      <p className="text-6xl font-bold  text-center mt-16">التطبيقات</p>
      <div className="lg:flex lg:justify-center gap-60">
        <div>
          <p className="text-5xl font-bold  text-center mt-16">Car Wave</p>
          <Link to={"/mobileapps/carwave"}>
            <img
              className="rounded-defaultRounded mx-auto my-10 hover:opacity-80 duration-300 cursor-pointer"
              src={CarWaveHome}
              alt="LitLoom"
            />
          </Link>
          <div className="flex justify-center">
            <Link
              to={"/mobileapps/carwave"}
              className="bg-customPurble hover:opacity-80 duration-300 px-7 py-3 font-bold text-white text-3xl rounded-roundedButt"
            >
              أستكشف
            </Link>
          </div>
        </div>
        <div>
          <p className="text-5xl font-bold  text-center mt-16">LitLooms</p>
          <Link to={"/mobileapps/litloom"}>
            <img
              className="rounded-defaultRounded my-10 mx-auto hover:opacity-80 duration-300 cursor-pointer"
              src={LitLoomHome}
              alt="LitLoom"
            />
          </Link>
          <div className="flex justify-center">
            <Link
              to={"/mobileapps/litloom"}
              className="bg-customPurble hover:opacity-80 duration-300 px-7 py-3 mb-5 font-bold text-white text-3xl rounded-roundedButt"
            >
              أستكشف
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
