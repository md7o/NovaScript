import Blog1 from "../../images/BNB.webp";
import Blog2 from "../../images/gridView.webp";
const Topics = () => {
  return (
    <div className="block  w-2/5 mx-auto">
      <h1 className="flex justify-end text-4xl text-white mb-14 font-bold pr-10">
        : بعض المدونات
      </h1>
      <div className="flex justify-center items-center gap-x-16">
        <a
          className="hover:opacity-80 duration-300 ease-in-out"
          href="https://medium.com/@md7ohe/gridview-with-a-modern-design-d82c66d2fd60"
        >
          <img alt="medium" className="rounded-defaultRounded" src={Blog1} />
          <p className="text-white text-3xl text-center mt-3 mb-14">
            Bottom Navigation Bar
          </p>
        </a>
        <a
          className="hover:opacity-80 duration-300 ease-in-out"
          href="https://medium.com/@md7ohe/flutter-bottom-navigation-bar-40767d374af8"
        >
          <img alt="medium" className="rounded-defaultRounded" src={Blog2} />
          <p className="text-white text-3xl text-center mt-3 mb-14">
            GridView with modern design
          </p>
        </a>
      </div>
    </div>
  );
};

export default Topics;
