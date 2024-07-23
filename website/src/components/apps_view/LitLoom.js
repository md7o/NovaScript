import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import onHill from "../../images/library.jpg";
import MainCover from "../../images/book.png";
import AI from "../../images/ai.png";
import Era from "../../images/EraOfAlchemist.png";
import Forest from "../../images/ForestWhispers.png";
import TheHidden from "../../images/TheHiddenPath.png";
import HourOfHope from "../../images/HourOfHope.png";
import LastLetter from "../../images/TheLastLetter.png";
import TrojanWar from "../../images/TheTrojanWar.png";
import DragonSamurai from "../../images/DragonSamuraiCover.png";
import Sands from "../../images/SandsOfDestiny.png";
import WallOfChina from "../../images/GreatWallOfChina.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const LitLoom = () => {
  const [fontSize, setFontSize] = useState(35);
  const [isBold, setBoldFont] = useState(false);
  const [isAlign, setAlignFont] = useState(false);
  const [isBG, setBackground] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };
  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };
  const boldFont = () => {
    setBoldFont(!isBold);
  };
  const alignFont = () => {
    setAlignFont(!isAlign);
  };
  const bgColor = (color) => {
    setBackground(color);
    setTextColor(color === "bg-SecondBG" ? "text-white" : "text-black");
  };

  return (
    <div className="bg-customBG">
      <img
        className="w-full 2xl:h-hugeH h-resizeBG object-cover absolute blur-md opacity-50"
        src={onHill}
        alt="car"
      />
      <div className="flex xl:justify-end justify-center items-center gap-14 pt-10 xl:pr-96 ">
        <a
          href="https://github.com/md7o/LitLoom/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl relative"
        >
          GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.literature.LitLoom"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl relative"
        >
          GooglePlay
        </a>
      </div>
      <div className="w-1/2 mx-auto pt-52 flex justify-around items-start ">
        <div>
          <p className="text-white stroke xl:text-8xl text-5xl pt-24 font-bold mb-5 relative">
            LitLoom
          </p>
          <p className="text-white xl:text-6xl text-4xl  mb-12 relative">
            Literature Loom
          </p>
          <Link
            to={"/mobileapps/carwave"}
            className="bg-customPurble hover:opacity-70 duration-300 px-20 opacity-90 font-bold text-white sm:text-4xl xl:text-5xl text-3xl rounded-roundedButt relative"
            href="https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/"
          >
            Explore
          </Link>
        </div>
        <div>
          <img
            src={MainCover}
            alt="coverbook"
            className="w-hugeW hover:grayscale 3xl:block hidden duration-300 ease-in-out cursor-pointer relative"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="400"
        className="bg-SecondBG w-full xl:flex justify-center items-center 2xl:mt-between mt-between2 xl:h-mediumH h-h-96  gap-60"
      >
        <div className="xl:w-1/5 xl:text-left text-center pt-10">
          <p className="xl:text-7xl  text-5xl text-white font-bold">Ai</p>
          <p className="xl:text-5xl text-3xl text-white my-10">
            All book content like story and cover book was build by ai
          </p>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-offest="10"
          className="rounded-defaultRounded mx-auto xl:mx-0 xl:w-auto w-72 pb-10"
          src={AI}
          alt="LitLoom"
        />
      </div>
      <div data-aos="fade-up" className="mt-96">
        <p className="md:text-5xl text-3xl text-white font-bold text-center mb-16">
          Full control on the text
        </p>
        <div className="flex justify-center items-center">
          <p
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? "bold" : "normal",
              textAlign: isAlign ? "justify" : "start",
            }}
            className={`text-justify ${isBG} ${textColor} w-superW overflow-auto scroll-hidden h-smallHplus py-14 px-20 rounded-defaultRounded`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="xl:flex xl:justify-center text-center my-8">
          <p className="text-white text-4xl">Font Size: {fontSize}px</p>
          <div className="flex justify-center my-3">
            <p className="text-white text-4xl pl-10 ">Bold: </p>
            <p
              style={{ color: isBold ? "lightgreen" : "red" }}
              className="text-red-500 text-4xl px-2"
            >
              {isBold ? "true" : "false"}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-white text-4xl pl-10">Align: </p>
            <p
              style={{ color: isAlign ? "lightgreen" : "red" }}
              className="text-red-500 text-4xl px-2"
            >
              {isAlign ? "true" : "false"}
            </p>
          </div>
        </div>
        <div className="sm:flex grid justify-center gap-10">
          <button
            onClick={boldFont}
            className="bg-SecondBG  text-white rounded-roundedButt font-bold text-5xl px-14 py-5"
          >
            Bold
          </button>
          <button
            onClick={increaseFontSize}
            className="bg-SecondBG text-white rounded-roundedButt font-bold text-5xl px-14 py-5"
          >
            +
          </button>
          <button
            onClick={decreaseFontSize}
            className="bg-SecondBG text-white rounded-roundedButt font-bold text-5xl px-14 py-5"
          >
            -
          </button>
          <button
            onClick={alignFont}
            className="bg-SecondBG text-white rounded-roundedButt font-bold text-5xl px-14 py-5"
          >
            Align
          </button>
        </div>
        <p className="md:text-5xl text-3xl text-white font-bold text-center my-16">
          Full control on the text
        </p>
        <div className="flex justify-center items-center gap-5 mt-10">
          <span
            onClick={() => bgColor("bg-white")}
            className="text-6xl text-FirstBG font-bold bg-white p-10 rounded-defaultRounded cursor-pointer hover:opacity-75 duration-300"
          >
            Aa
          </span>
          <span
            onClick={() => bgColor("bg-SecondBG")}
            className="text-6xl text-white font-bold bg-SecondBG p-10 rounded-defaultRounded cursor-pointer hover:opacity-75 duration-300"
          >
            Aa
          </span>
          <span
            onClick={() => bgColor("bg-orange-100")}
            className="text-6xl text-FirstBG font-bold bg-orange-100 p-10 rounded-defaultRounded cursor-pointer hover:opacity-75 duration-300"
          >
            Aa
          </span>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="xl:mt-52 mt-32 mx-auto pb-1 bg-SecondBG text-justify xl:w-1/2 scroll-hidden xl:h-mediumH xl:rounded-defaultRounded "
      >
        <p
          data-aos="fade-up"
          className="xl:text-6xl text-4xl xl:text-left text-center text-white font-bold xl:pl-60 pt-10 mb-16"
        >
          Various books
        </p>

        <div className="2xl:mx-24 mb-20">
          <Swiper
            modules={[A11y]}
            effect="parallax"
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img className="rounded-defaultRounded" src={Era} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={Forest}
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={HourOfHope}
                alt="Slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={TheHidden}
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={LastLetter}
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={TrojanWar}
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={DragonSamurai}
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={Sands}
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src={WallOfChina}
                alt="Slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div
        data-aos="fade-up"
        className="2xl:flex justify-center items-center my-between3"
      >
        <div className="block justify-center items-center mx-52">
          {specifications.map((specifi, index) => (
            <div
              key={index}
              className="flex justify-between items-center xl:space-x-52 space-x-96 border-y border-white py-4"
            >
              <div className="flex justify-center items-center">
                <img
                  className="sm:w-12 w-8 mr-4"
                  src={specifi.icon}
                  alt="icon"
                />
                <p className="text-white sm:text-4xl text-2xl">
                  {specifi.describe}
                </p>
              </div>
              <p className="text-white text-4xl lg:block hidden">
                {specifi.unit}
              </p>
            </div>
          ))}
        </div>
        <img
          data-aos="fade-up"
          className="rounded-defaultRounded 2xl:w-hugeW 2xl:mx-0 mx-auto 2xl:mt-0 mt-16"
          src="https://scottsfortcollinsauto.com/wp-content/uploads/CarEngine2.jpg"
          alt="carEngine"
        />
      </div> */}
    </div>
  );
};

export default LitLoom;
