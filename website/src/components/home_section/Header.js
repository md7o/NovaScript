import { useEffect } from "react";
import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import mail from "../../images/mail.png";
import twitter from "../../images/twitter.png";
import whatsapp from "../../images/whatsapp.png";

const Logo = [
  {
    src: whatsapp,
    alt: "whatsapp",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: mail,
    alt: "mail",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: twitter,
    alt: "twitter",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: github,
    alt: "github",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: linkedin,
    alt: "linkedin",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
];

const Header = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="block w-2/5 mx-auto bg-customBG">
      <div className="flex justify-center items-center text-white text-2xl gap-10 mt-10">
        <Link
          to={"/mobileapps"}
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

      <h1 className="flex justify-end text-5xl text-white  mt-28 mb-10 font-bold">
        محمد الحراكي
      </h1>
      <p className="flex justify-end text-4xl text-white">
        Flutter & ReactJs مطور واجهات المستخدم
      </p>
      <div className="flex justify-end">
        {Logo.map((logo, index) => (
          <img
            className="w-8 mx-2 mt-10 cursor-pointer"
            src={logo.src}
            alt={logo.alt}
            key={index}
            onClick={() => handleClick(logo.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
