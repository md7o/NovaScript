import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BlogHeader from "./components/blog_section/widget/blog_header";
import Github from "./images/linkedin.png";
import Medium from "./images/medium.png";
import Trash from "./images/trash-bin.png";
import Edit from "./images/pen.png";
import view from "./images/view.png";
import { useTheme } from "./theme_context.js";

import "./App.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [click, setClick] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/blog/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/check_login",
          { withCredentials: true }
        );
        setIsLoggedIn(response.data.logged_in);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    fetchBlogs();
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/admin/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      navigate("/blogs/login_admin"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const removeBlog = async (index) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/blog/api/blogs/${index}`
      );
      if (response.status === 200) {
        setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="BlogBG">
      <BlogHeader />

      <p className="text-center text-5xl font-bold mt-24">صفحة المدونات</p>

      {/* <h1 className="text-white text-center text-5xl font-bold pt-5">
        Blogs Page
      </h1> */}
      {/* <Link to="/blogs/newsubject" state={{ blogs }}>
        <button className="text-white text-3xl bg-blue-800 rounded-xl px-5 y-20">
          Create New
        </button>
      </Link>
      <button
        onClick={handleClick}
        className="text-white text-3xl bg-blue-800 rounded-xl px-5 y-20"
      >
        add
      </button> */}
      {isLoggedIn && (
        <div>
          <button
            onClick={handleLogout}
            className="text-white text-2xl rounded-xl px-5 mx-1 y-20"
          >
            Logout
          </button>
        </div>
      )}

      {blogs.length > 0 ? (
        <div>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={` 3xl:w-2/4 xl:w-1/3 md:w-1/2 mx-auto rounded-roundedButt my-10 ${
                isDarkTheme ? "light-box" : "dark-box"
              } `}
            >
              <Link
                to={{
                  pathname: "/blogs/subject",
                }}
                onCl={handleClick}
                state={{ blog }}
                className="3xl:flex 3xl:flex-row flex flex-col-reverse justify-between 3xl:items-center"
              >
                <div className="2xl:p-14 p-7 ">
                  <div className="flex gap-5">
                    <p className=" 2xl:text-5xl text-4xl">{blog.title}</p>

                    {isLoggedIn && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeBlog(index);
                        }}
                      >
                        <img
                          className="mx-4 w-10 rounded-full"
                          alt="Trash"
                          src={Trash}
                        />
                      </button>
                    )}
                    {isLoggedIn && (
                      <Link
                        to={{
                          pathname: "/blogs/edit",
                        }}
                        state={{ blog, index }}
                      >
                        <button>
                          <img
                            className="mx-4 w-10 rounded-full"
                            alt={Edit}
                            src={Edit}
                          />
                        </button>
                      </Link>
                    )}
                  </div>
                  <p className="text-2xl text-zinc-400 tracking-widest my-5">
                    {blog.publishDate}
                  </p>
                  <div className="text-white flex gap-5 mx-auto">
                    {(blog.tags || []).map((tag, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: tag.color }}
                        className="text-white text-3xl rounded-xl px-5"
                      >
                        <p>{tag.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-start items-center gap-2 my-5">
                    <img alt={view} src={view} className="w-8" />
                    <p className=" text-2xl">View: {click}</p>
                  </div>

                  <p className="text-neutral-500 text-xl 3xl:w-biggW break-words">
                    {blog.descreption}
                  </p>

                  {/* <p className="text-white text-4xl">Available on:</p>
                  {blog.isChecked1 && (
                    <a
                      className="flex justify-start items-center pointer-events-auto ease-in-out duration-500 hover:opacity-50"
                      href={blog.Link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="mr-4 my-5 w-10 rounded-full"
                        alt="LinkedIn"
                        src={Github}
                      />
                      <p className="text-white text-3xl">LinkedIn</p>
                    </a>
                  )}
                  {blog.isChecked2 && (
                    <a
                      className="flex justify-start items-center ease-in-out duration-500 hover:opacity-50"
                      href={blog.Link2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="mr-4 w-10 rounded-full"
                        alt="Medium"
                        src={Medium}
                      />
                      <p className="text-white text-3xl">Medium</p>
                    </a>
                  )} */}
                </div>
                {blog.image && (
                  <div className="flex justify-center items-center mx-10 3xl:my-10">
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="rounded-roundedButt 3xl:mt-0 mt-10 w-hugeW"
                    />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl mt-16">No submitted data</p>
      )}
    </div>
  );
};

export default Blogs;
