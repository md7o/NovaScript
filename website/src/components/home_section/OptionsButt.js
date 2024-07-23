import { Link } from "react-router-dom";

const OptionsButt = () => {
  return (
    <div className="flex justify-center gap-5  text-white">
      <Link
        className="bg-customPurble px-6 py-2 text-3xl rounded-roundedButt"
        to={"/mobileapps"}
        rel="noopener noreferrer"
      >
        التطبيقات
      </Link>
      <Link
        className="bg-customPurble px-6 py-2 text-3xl rounded-roundedButt"
        to={"/blogs"}
        rel="noopener noreferrer"
      >
        مدونات
      </Link>
    </div>
  );
};

export default OptionsButt;
