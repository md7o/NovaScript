import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import mail from "../../images/mail.png";
import twitter from "../../images/twitter.png";
import whatsapp from "../../images/whatsapp.png";
import GooglePlay from "../../images/google-play.png";
import book from "../../images/stack-of-books.png";
import { useTheme } from "../../theme_context.js";

const Logo = [
  {
    src: whatsapp,
    alt: "Whatsapp",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: mail,
    alt: "Email",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: twitter,
    alt: "Twitter",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: github,
    alt: "Github",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: linkedin,
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
  {
    src: linkedin,
    alt: "Medium",
    link: "https://www.linkedin.com/in/mohammed-alheraki-6bb97b247/",
  },
];

const BasicInterface = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const { isDarkTheme } = useTheme();

  return (
    <div className=" mx-auto">
      <p className="flex justify-center md:text-6xl text-4xl mt-28 mb-5 ">
        Mohammed Ayman Alheraki
      </p>
      <p className="flex justify-center font-light text-2xl text-zinc-500">
        Front-End developer Flutter & ReactJs
      </p>
      <div className="flex justify-center items-center gap-8 mt-10">
        {Logo.map((logo, index) => (
          <p
            className=" cursor-pointer opacity-80  text-lg hover:opacity-60 hover:duration-150"
            src={logo.alt}
            key={index}
            onClick={() => handleClick(logo.link)}
          >
            {logo.alt}
          </p>
        ))}
      </div>
      <div className="lg:w-3/5 sm:w-full mx-auto sm:flex justify-center items-center gap-5 mt-20">
        <div
          className={`w-full h-smallH rounded-roundedButt duration-500 hover:scale-95 cursor-pointer ${
            isDarkTheme ? "light-box" : "dark-box"
          }`}
        >
          <img
            className="w-24 mx-10 mt-10 2xl:p-0 pt-8"
            src={GooglePlay}
            alt={GooglePlay}
          />
          <p className="px-10 text-3xl font-bold my-5">GooglePlay</p>
          <p className="px-10 text-xl font-light my-5">
            All the mobile apps created previously are available on Google Play
          </p>
          <p className="px-10 text-2xl font-light my-8 underline underline-offset-1">
            View &gt;
          </p>
        </div>
        <div
          className={`w-full h-smallH rounded-roundedButt duration-500 hover:scale-95 cursor-pointer ${
            isDarkTheme ? "light-box" : "dark-box"
          }`}
        >
          <img
            className="w-24 mx-10 mt-10 2xl:p-0 pt-8 "
            alt={book}
            src={book}
          />
          <p className="px-10 text-3xl font-bold my-5">Blogs</p>
          <p className="px-10 text-xl font-light my-5">
            All the blogs i have written before are in the blogs section
          </p>
          <p className="px-10 text-2xl font-light my-8 underline underline-offset-1">
            View &gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicInterface;
