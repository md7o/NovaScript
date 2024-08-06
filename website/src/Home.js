import Header from "./components/home_section/Header.js";
import OptionsButt from "./components/home_section/OptionsButt.js";
import PreviousApps from "./components/home_section/PreviousApps.js";
import Blogs from "./components/home_section/Topics.js";

import "./App.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-white h-0.5 w-2/5 mx-auto my-10 mb-24" />
      {/* <OptionsButt /> */}
      <PreviousApps />
      <div className="bg-white h-0.5 w-2/5 mx-auto my-16 mb-24" />
      <Blogs />
    </div>
  );
}

export default Home;
