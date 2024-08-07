import Blog1 from "../../images/BNB.webp";
import Blog2 from "../../images/gridView.webp";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="block w-2/5 mx-auto">
      <div className="flex justify-between items-center px-5 mb-10">
        <Link
          to={"/blogs"}
          rel="noopener noreferrer"
          className="flex justify-end text-2xl font-bold cursor-pointer hover:duration-500 hover:opacity-65"
        >
          ◀️ إستكشف المزيد
        </Link>
        <h1 className="flex justify-end text-4xl font-bold">: بعض المدونات</h1>
      </div>
      <div className="flex justify-center items-center gap-x-16">
        <a
          className="hover:opacity-80 duration-300 ease-in-out"
          href="https://medium.com/@md7ohe/flutter-bottom-navigation-bar-40767d374af8"
        >
          <img alt="medium" className="rounded-defaultRounded" src={Blog1} />
          <p className=" text-3xl text-center mt-3 mb-14">
            Bottom Navigation Bar
          </p>
        </a>
        <a
          className="hover:opacity-80 duration-300 ease-in-out"
          href="https://medium.com/@md7ohe/gridview-with-a-modern-design-d82c66d2fd60"
        >
          <img alt="medium" className="rounded-defaultRounded" src={Blog2} />
          <p className=" text-3xl text-center mt-3 mb-14">
            GridView with modern design
          </p>
        </a>
      </div>
    </div>
  );
};

export default Topics;
