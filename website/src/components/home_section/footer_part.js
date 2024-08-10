import NSLogo from "../../images/Nova Script Logo.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import mail from "../../images/mail.png";
import twitter from "../../images/twitter.png";
import whatsapp from "../../images/whatsapp.png";

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

const FooterPart = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="h-52 mt-24">
      <div className="px-72 py-10 bg-FirstBG">
        <img
          to={"/mobileapps"}
          rel="noopener noreferrer"
          className="w-36 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 cursor-pointer"
          src={NSLogo}
          alt={NSLogo}
        />
        <p className="text-white opacity-50 text-lg font-light pt-5">
          NovaScript
        </p>
        <div className="bg-white opacity-15 h-line mx-auto mt-24" />
        <div className="flex justify-end items-center gap-8 mt-5">
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
    </div>
  );
};

export default FooterPart;
