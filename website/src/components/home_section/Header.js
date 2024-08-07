import { useState } from "react";
import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import mail from "../../images/mail.png";
import twitter from "../../images/twitter.png";
import whatsapp from "../../images/whatsapp.png";
import NSLogo from "../../images/Nova Script Logo.png";
import DarkMode from "../../images/moon.png";
import LightMode from "../../images/brightness.png";
import { useTheme } from "../../theme_context";
import "../../App.css";

const Header = () => {
  const [isIcon, setIsIcon] = useState(true);
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleTheme = () => {
    setIsIcon(!isIcon);
    toggleTheme();
  };

  const appStyles = {
    backgroundColor: isDarkTheme ? "#101114" : "#f0f0f0",
    color: isDarkTheme ? "#FFFFFF" : "#101114",
  };

  return (
    <div className="sticky top-0 mx-auto" style={appStyles}>
      <div className="sticky top-0 flex justify-around items-center text-2xl gap-10 mt-5">
        <img
          to={"/"}
          rel="noopener noreferrer"
          className="w-32 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 cursor-pointer"
          src={NSLogo}
          alt={NSLogo}
        />
        <div className="flex justify-between items-center text-2xl gap-10">
          <Link
            to={"/"}
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
          >
            Home
          </Link>
          <Link
            to={"/blogs"}
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
          >
            Blogs
          </Link>
          <Link
            to={"/mobileapps"}
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
          >
            Apps
          </Link>
        </div>

        <button onClick={handleTheme}>
          <img
            className="w-7 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:animate-pulse"
            src={isDarkTheme ? LightMode : DarkMode}
            alt="Toggle"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
