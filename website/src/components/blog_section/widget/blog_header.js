import { Link } from "react-router-dom";
import { useState } from "react";
import NSLogo from "../../../images/Nova Script Logo.png";
import DarkMode from "../../../images/moon.png";
import LightMode from "../../../images/brightness.png";
import { useTheme } from "../../../theme_context";
const BlogHeader = () => {
  const [isIcon, setIsIcon] = useState(true);
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleTheme = () => {
    setIsIcon(!isIcon);
    toggleTheme();
  };
  return (
    <div className="sticky top-0 flex justify-around items-center text-white mt-5">
      <img
        to={"/mobileapps"}
        rel="noopener noreferrer"
        className="w-32 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
        src={NSLogo}
        alt={NSLogo}
      />
      <div className="flex justify-center items-center gap-8">
        <Link
          to="/blogs/newsubject"
          // state={{ blogs }}
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out text-xl "
        >
          Create New Blog +
        </Link>
        <Link
          to="/blogs/login_admin"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out text-xl "
        >
          Admin
        </Link>
        <button onClick={handleTheme}>
          <img
            className="w-7 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 "
            src={isDarkTheme ? LightMode : DarkMode}
            alt="Toggle"
          />
        </button>
      </div>
    </div>
  );
};

export default BlogHeader;
