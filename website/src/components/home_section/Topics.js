import Blog1 from "../../images/BNB.webp";
import Blog2 from "../../images/gridView.webp";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="block xl:w-1/2 mx-auto mt-24">
      <div className="flex justify-between items-center px-5 mb-10">
        <p className="text-4xl font-light">Blogs</p>
        <Link
          to={"/blogs"}
          rel="noopener noreferrer"
          className="text-2xl font-light cursor-pointer hover:duration-500 hover:opacity-65"
        >
          Explore more &gt;
        </Link>
      </div>
      <div className="2.5xl:flex justify-center items-center mx-auto gap-x-5">
        <div className="duration-500 hover:bg-zinc-900 hover:rounded-roundedButt ">
          <a
            className="hover:opacity-80 duration-300 ease-in-out "
            href="https://medium.com/@md7ohe/flutter-bottom-navigation-bar-40767d374af8"
          >
            <img
              alt="medium"
              className="rounded-roundedButt duration-500 hover:scale-90  mx-auto"
              src={Blog1}
            />
            <p className="3xl:text-3xl text-2xl text text-center p-5 font-light">
              Bottom Navigation Bar
            </p>
          </a>
        </div>
        <div className="duration-500 hover:bg-zinc-900 hover:rounded-roundedButt ">
          <a
            className="hover:opacity-80 duration-300 ease-in-out"
            href="https://medium.com/@md7ohe/gridview-with-a-modern-design-d82c66d2fd60"
          >
            <img
              alt="medium"
              className="rounded-roundedButt duration-500 hover:scale-90  mx-auto"
              src={Blog2}
            />
            <p className="3xl:text-3xl text-2xl text-center p-5 font-light">
              GridView with modern design
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topics;
