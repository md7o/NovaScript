import "../../App.css";
import { Link } from "react-router-dom";
import onHill from "../../images/onHill.jpg";
import CarWaveHome from "../../images/HomePageCarWave.png";
import showCountries from "../../images/countries.png";
import Mecredes from "../../images/Mercedes.png";
import Toyota from "../../images/Toyota.png";
import Ford from "../../images/Ford.png";
import Hyundai from "../../images/Hyundai.png";
import BackTime from "../../images/backTime.png";
import Cylinder from "../../images/cylinder.png";
import Engine from "../../images/engine.png";
import Seat from "../../images/seat.png";
import Ruler from "../../images/ruler.png";
import Tank from "../../images/tank.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Brand = [
  {
    src: Mecredes,
    alt: "mecredes",
    title: "Mecredes",
  },
  {
    src: Toyota,
    alt: "toyota",
    title: "Toyota",
  },
  {
    src: Ford,
    alt: "ford",
    title: "Ford",
  },
  {
    src: Hyundai,
    alt: "hyundai",
    title: "Hyundai",
  },
];

const specifications = [
  {
    icon: Engine,
    describe: "Horsepower",
    unit: "hp",
  },
  {
    icon: Cylinder,
    describe: "Cylinder",
    unit: "V4,V6,V8",
  },
  {
    icon: Tank,
    describe: "Fuel Tank",
    unit: "gal",
  },
  {
    icon: BackTime,
    describe: "Production",
    unit: "Month, Year",
  },
  {
    icon: Ruler,
    describe: "Lenght",
    unit: "inch",
  },
  {
    icon: Seat,
    describe: "Seating",
    unit: "Number of seat",
  },
];

const CarWave = () => {
  const [showImage, setShowCountries] = useState(false);

  const handleClick = () => {
    setShowCountries(true);
  };

  return (
    <div className="bg-customBG">
      <img
        className="w-full 2xl:h-hugeH h-resizeBG object-cover absolute blur-md opacity-50"
        src={onHill}
        alt="car"
      />
      <div className="flex xl:justify-end justify-center items-center gap-14 font-light pt-10 xl:pr-96">
        <a
          href="https://github.com/md7o/World-Cars"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl relative"
        >
          GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.world.cars.worldcars"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl relative"
        >
          GooglePlay
        </a>
      </div>
      <div className="w-1/2 mx-auto pt-72">
        <p className="text-white stroke xl:text-8xl text-4xl tracking-widest relative">
          Car Wave
        </p>
        <p className="hlao text-transparent xl:text-8xl text-4xl tracking-widest relative ">
          Car Wave
        </p>
        <p className="hlao text-transparent xl:text-8xl text-4xl tracking-widest relative pb-4 md:mb-14 mb-8">
          Car Wave
        </p>

        <Link
          to={"/mobileapps/carwave"}
          className="bg-customPurble hover:opacity-70 duration-300 xl:px-44 sm:px-32 px-24 md:py-3 opacity-90 font-light text-white text-4xl rounded-roundedButt relative "
          href="https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/"
        >
          Explore
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="400"
        className="bg-SecondBG w-full xl:flex justify-center items-center 2xl:mt-between mt-between3 xl:h-mediumH h-biggH gap-60"
      >
        <div className="xl:w-1/5 xl:text-left text-center">
          <p className="xl:text-6xl  text-4xl text-white font-light">
            HomePage
          </p>
          <p className="xl:text-4xl text-3xl text-white my-10">
            Top 10 car sales rate in one year
          </p>
          <p className="xl:text-4xl text-3xl text-white xl:mb-20 mb-10">
            The App contain 4 main countries Germany, Japan, America, Korea
          </p>
          {!showImage ? (
            <button
              data-aos="fade-up"
              onClick={handleClick}
              className="bg-customPurble hover:opacity-70 duration-300 xl:px-20 xl:py-3 p-4 mb-10 opacity-90 font-light text-white xl:text-5xl text-4xl rounded-roundedButt"
            >
              Show
            </button>
          ) : (
            <img
              data-aos="fade-up"
              className="w-96  transition-transform duration-500 ease-in-out animate-slide-in"
              src={showCountries}
              alt="Replacement"
            ></img>
          )}
        </div>
        <img
          data-aos="zoom-in"
          data-aos-offest="10"
          className="rounded-defaultRounded mx-auto xl:mx-0 xl:w-auto w-72"
          src={CarWaveHome}
          alt="LitLoom"
        />
      </div>
      <div data-aos="fade-up" className="mt-96">
        <p className="md:text-5xl text-3xl text-white font-light text-center mb-16">
          Each country has four famous brands
        </p>
        <div className="xl:flex justify-center items-center mx-auto gap-52 ">
          {Brand.map((brand, index) => (
            <div c>
              <img
                className="md:w-44 w-32 mx-auto hover:animate-pulse"
                src={brand.src}
                alt={brand.alt}
                key={index}
              />
              <p className="text-center text-white text-5xl font-light xl:mt-4 mb-10">
                {brand.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up" className="xl:mt-52 mt-32 bg-SecondBG">
        <p
          data-aos="fade-up"
          className="xl:text-7xl text-4xl xl:text-left text-center text-white font-light xl:pl-60 pt-10 mb-16"
        >
          Explore the vehicles
        </p>

        <div data-aos="fade-up" className="2xl:px-60 hover:animate-pulse">
          <Swiper
            modules={[Pagination, A11y]}
            effect="parallax"
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src="https://media.ed.edmunds-media.com/honda/hr-v/2023/oem/2023_honda_hr-v_4dr-suv_ex-l_fq_oem_3_815x543.jpg"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src="https://media.ed.edmunds-media.com/honda/hr-v/2023/oem/2023_honda_hr-v_4dr-suv_sport_f_oem_1_815x543.jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src="https://media.ed.edmunds-media.com/honda/hr-v/2023/oem/2023_honda_hr-v_4dr-suv_sport_r_oem_1_815x543.jpg"
                alt="Slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-defaultRounded"
                src="https://media.ed.edmunds-media.com/honda/hr-v/2023/oem/2023_honda_hr-v_4dr-suv_ex-l_s_oem_1_815x543.jpg"
                alt="Slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p
          data-aos="fade-up"
          className="xl:text-6xl text-4xl text-white text-center font-light my-10 pb-10"
        >
          Show all angles of the cars
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="2xl:flex justify-center items-center my-between3"
      >
        <div className="block justify-center items-center mx-52 ">
          {specifications.map((specifi, index) => (
            <div
              key={index}
              className="flex justify-between items-center xl:space-x-52 space-x-96 border-y border-white py-4"
            >
              <div className="flex justify-center items-center">
                <img
                  className="sm:w-12 w-8 mr-4 hover:animate-spin duration-500"
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
      </div>
    </div>
  );
};

export default CarWave;
