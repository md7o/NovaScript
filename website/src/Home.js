import Header from "./components/home_section/header.js";
import FooterPart from "./components/home_section/footer_part.js";
import Blogs from "./components/home_section/Topics.js";
import BasicInterface from "./components/home_section/basic_interface.js";
import MobilePart from "./components/home_section/mobile_part.js";
import { useTheme } from "./theme_context.js";

import "./App.css";

function Home() {
  const { isDarkTheme } = useTheme();

  return (
    <div>
      <Header />
      <BasicInterface />
      {/* <OptionsButt /> */}
      {/* <PreviousApps /> */}
      <div
        className={`h-line w-2/5 mx-auto my-16 mb-24 ${
          isDarkTheme ? "dark-box" : "light-box"
        }`}
      />
      <MobilePart />
      <Blogs />
      <FooterPart />
    </div>
  );
}

export default Home;
