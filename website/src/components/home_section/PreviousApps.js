import FlutterLogo from "../../images/Flutter_logo.png";
import Github from "../../images/github.png";
import GooglePlay from "../../images/google-play.png";

const PreviousApps = () => {
  return (
    <div className="block w-2/5 mx-auto">
      <h1 className="flex justify-end text-4xl mt-16 mb-14 font-bold pr-10">
        : أعمال سابقة
      </h1>
      <div className="flex justify-end items-center">
        <a
          href="https://github.com/md7o/LitLoom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-5 w-14 rounded-full ease-in-out duration-500 hover:opacity-50"
            alt="Github"
            src={Github}
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.literature.LitLoom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" w-14 rounded-full  ease-in-out duration-500 hover:opacity-50 "
            alt="github"
            src={GooglePlay}
          />
        </a>
        <p className="select-none  text-4xl cursor-pointer ease-in-out duration-500 hover:text-gray-400 mx-10">
          ( LitLoom ) تطبيق الكتب
        </p>
        <img
          className=" w-16 bg-white rounded-full p-2"
          alt="FlutterLogo"
          src={FlutterLogo}
        />
      </div>

      <div className="flex justify-end items-center my-10">
        <a
          href="https://github.com/md7o/World-Cars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-5 w-14 rounded-full ease-in-out duration-500 hover:opacity-50"
            alt="Github"
            src={Github}
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.world.cars.worldcars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" w-14 rounded-full  ease-in-out duration-500 hover:opacity-50 "
            alt="github"
            src={GooglePlay}
          />
        </a>
        <p className="select-none  text-4xl cursor-pointer ease-in-out duration-500 hover:text-gray-400 mx-10">
          ( Car Wave ) تطبيق السيارات
        </p>
        <img
          className=" w-16 bg-white rounded-full p-2"
          alt="FlutterLogo"
          src={FlutterLogo}
        />
      </div>
    </div>
  );
};

export default PreviousApps;
