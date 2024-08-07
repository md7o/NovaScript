import Header from "./components/home_section/Header.js";
import OptionsButt from "./components/home_section/OptionsButt.js";
import PreviousApps from "./components/home_section/PreviousApps.js";
import FooterPart from "./components/home_section/footer_part.js";
import Blogs from "./components/home_section/Topics.js";

import "./App.css";

function Home() {
  return (
    <div className="">
      <Header />
      <div className="w-2/5 mx-auto">
        <h1 className="flex justify-end text-5xl mt-28 mb-10 font-bold">
          محمد الحراكي
        </h1>
        <p className="flex justify-end text-4xl">
          Flutter & ReactJs مطور واجهات المستخدم
        </p>
      </div>
      <div className="bg-white h-line w-2/5 mx-auto my-10 mb-24" />
      {/* <OptionsButt /> */}
      <PreviousApps />
      <div className="bg-white h-line w-2/5 mx-auto my-16 mb-24" />
      <Blogs />
      <FooterPart />
    </div>
  );
}

export default Home;
