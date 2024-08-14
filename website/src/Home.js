import Header from "./components/home_section/Header.js";
import OptionsButt from "./components/home_section/OptionsButt.js";
import PreviousApps from "./components/home_section/PreviousApps.js";
import FooterPart from "./components/home_section/footer_part.js";
import Blogs from "./components/home_section/Topics.js";
import BasicInterface from "./components/home_section/basic_interface.js";
import { useTheme } from "./theme_context.js";
import NSLogo from "./images/Nova Script Logo.png";

import "./App.css";

function Home() {
  const { isDarkTheme } = useTheme();

  return (
    <div>
      <Header />
      <BasicInterface />
      {/* <div
        className={`h-line w-2/5 mx-auto my-16 mb-24 ${
          isDarkTheme ? "light-box" : "dark-box"
        }`}
      /> */}
      {/* <OptionsButt /> */}
      {/* <PreviousApps /> */}
      <div
        className={`h-line w-2/5 mx-auto my-16 mb-24 ${
          isDarkTheme ? "dark-box" : "light-box"
        }`}
      />
      <Blogs />
      <FooterPart />
    </div>
  );
}

export default Home;
