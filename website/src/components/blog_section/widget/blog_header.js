import { Link } from "react-router-dom";
import NSLogo from "../../../images/Nova Script Logo.png";

const BlogHeader = () => {
  return (
    <div className="flex justify-around items-center text-white text-2xl gap-10 mt-10">
      <img
        to={"/mobileapps"}
        rel="noopener noreferrer"
        className="w-40 hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65"
        src={NSLogo}
        alt={NSLogo}
      />
      <Link
        to="/blogs/newsubject"
        // state={{ blogs }}
        rel="noopener noreferrer"
        className="hover:underline hover:underline-offset-5 hover:duration-500 hover:opacity-65 hover:ease-in-out"
      >
        Create New Blog +
      </Link>
    </div>
  );
};

export default BlogHeader;
