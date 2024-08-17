import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NSLogo from "../../../images/Nova Script Logo.png";
import DarkMode from "../../../images/moon.png";
import LightMode from "../../../images/brightness.png";
import { useTheme } from "../../../theme_context";
const BlogHeader = () => {
  const [isIcon, setIsIcon] = useState(true);
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/check_login",
          { withCredentials: true }
        );
        setIsLoggedIn(response.data.logged_in);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/admin/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleTheme = () => {
    setIsIcon(!isIcon);
    toggleTheme();
  };
  return (

<div
      className={`fixed top-0 w-full flex justify-around items-center text-white py-2 ${
        isDarkTheme ? "light-box" : "dark-box"
      }`}
    >     <img
        to={"/mobileapps"}
        rel="noopener noreferrer"
        className="w-32 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
        src={NSLogo}
        alt={NSLogo}
      />
      <div className="flex justify-between items-center text-2xl font-light gap-3">
        <Link
          to={"/"}
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-5 duration-500 hover:opacity-65"
        >
          Home
        </Link>
        <Link
          to={"/blogs"}
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-5 duration-500 hover:opacity-65"
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
      <div className="flex justify-center items-center gap-8">
        {isLoggedIn && (
          <Link
            to="/blogs/newsubject"
            // state={{ blogs }}
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out text-xl "
          >
            Create New Blog +
          </Link>
        )}
        <Link
          to="/blogs/login_admin"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out text-xl "
        >
          Admin
        </Link>
        {isLoggedIn && (
          <div>
            <button
              onClick={handleLogout}
              className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out text-xl "
            >
              Logout
            </button>
          </div>
        )}
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
