import Header from "./components/home_section/Header.js";
import OptionsButt from "./components/home_section/OptionsButt.js";
import PreviousApps from "./components/home_section/PreviousApps.js";
import FooterPart from "./components/home_section/footer_part.js";
import Blogs from "./components/home_section/Topics.js";
import { useTheme } from "./theme_context.js";
import NSLogo from "./images/Nova Script Logo.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import mail from "./images/mail.png";
import twitter from "./images/twitter.png";
import whatsapp from "./images/whatsapp.png";

import "./App.css";

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

function Home() {
  const { isDarkTheme } = useTheme();

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="w-2/5 mx-auto">
        <h1 className="flex justify-center text-5xl mt-28 mb-10 ">
          محمد أيمن الحراكي
        </h1>
        <p className="flex justify-center font-light text-2xl text-zinc-400">
          Flutter & ReactJs مطور واجهات المستخدم
        </p>
        <div className="flex justify-center items-center gap-8 mt-10">
          {Logo.map((logo, index) => (
            <p
              className=" cursor-pointer opacity-80 text-white text-lg hover:opacity-60 hover:duration-150"
              src={logo.alt}
              key={index}
              onClick={() => handleClick(logo.link)}
            >
              {logo.alt}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`h-line w-2/5 mx-auto my-16 mb-24 ${
          isDarkTheme ? "light-box" : "dark-box"
        }`}
      />
      {/* <OptionsButt /> */}
      <PreviousApps />
      <div
        className={`h-line w-2/5 mx-auto my-16 mb-24 ${
          isDarkTheme ? "light-box" : "dark-box"
        }`}
      />
      <Blogs />
      <FooterPart />
    </div>
  );
}

export default Home;
