import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/home_section/header.js";
import LitLoomHome from "./images/LitLoomHomePage.png";
import CarWaveHome from "./images/HomePageCarWave.png";
import FooterPart from "./components/home_section/footer_part.js";

const MobileApps = () => {
  return (
    <div className="">
      <Header />

      <p className="text-6xl font-light text-center mt-24">Apps</p>
      <div className="lg:flex lg:justify-center gap-60">
        <div>
          <p className="text-5xl font-light  text-center mt-16">Car Wave</p>
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
              className="hover:underline hover:underline-offset-1 hover:opacity-80 duration-300 px-7 py-3 text-3xl rounded-roundedButt"
            >
              Explore &gt;
            </Link>
          </div>
        </div>
        <div>
          <p className="text-5xl font-light text-center mt-16">LitLooms</p>
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
              className="hover:underline hover:underline-offset-1 hover:opacity-80 duration-300 px-7 py-3 mb-5 text-3xl rounded-roundedButt"
            >
              Explore &gt;
            </Link>
          </div>
        </div>
      </div>
      <FooterPart />
    </div>
  );
};

export default MobileApps;
