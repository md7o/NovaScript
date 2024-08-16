import mobileapps from "../../images/mobile apps.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme_context.js";

const MobilePart = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={` rounded-roundedButt h-height700 flex justify-center items-center my-40 ${
        isDarkTheme ? "light-box" : "dark-box"
      }`}
    >
      <div className="flex justify-center items-center gap-24 my-52">
        <div>
          <p className="stroke xl:text-8xl text-5xl tracking-widest ">
            Flutter App
          </p>
          <p className=" xl:text-3xl text-2xl tracking-widest relative max-w-2xl my-10 font-light">
            i have created two app using flutter and all the apps available on
            google play
          </p>

          {/* <p className="text-white xl:text-5xl text-4xl md:mb-14 mb-8 relative">
            Car WaveCar WaveCar Wave
          </p> */}
          <Link
            to={"/mobileapps"}
            className="bg-customPurble hover:opacity-70 duration-300 xl:px-24 sm:px-16 md:py-2 opacity-90 text-white text-4xl rounded-roundedButt  font-light"
            // href="https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/"
          >
            Explore
          </Link>
        </div>
        <Link to={"/mobileapps"}>
          <img
            className="h-xLarge 2.5xl:block hidden duration-500 hover:scale-95 "
            src={mobileapps}
            alt="mobileapps"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobilePart;
