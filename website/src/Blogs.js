import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogHeader from "./components/blog_section/widget/blog_header";

import Trash from "./images/trash-bin.png";
import Edit from "./images/pen.png";
import eye from "./images/view.png";
import { useTheme } from "./theme_context.js";

import "./App.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const fetchView = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blog/get_view");
        setView(response.data.number);
      } catch (error) {
        console.error("Error fetching view:", error);
      }
    };

    fetchBlogs();
    checkLoginStatus();
    fetchView();
  }, []);

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

  const handleIncrement = async () => {
    try {
      const response = await axios.post("http://localhost:5000/blog/increment");
      setView(response.data.number);
    } catch (error) {
      console.error("Error incrementing view:", error);
    }
  };

  return (
    <div>
      <BlogHeader />

      <p className="text-center text-5xl font-light mt-24">Blogs page</p>

      {/* <p>Current View: {view}</p> */}
      {/* <button onClick={handleIncrement}>Increase View</button> */}
      {blogs.length > 0 ? (
        <div className="xl:flex justify-center xl:w-full lg:w-1/2 w-full mx-auto gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`rounded-roundedButt my-10 p-10 ${
                isDarkTheme ? "light-box" : "dark-box"
              } `}
            >
              <Link
                to={{
                  pathname: "/blogs/subject",
                }}
                onClick={handleIncrement}
                state={{ blog }}
                className="block justify-between items-center"
              >
                {blog.image && (
                  <div>
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="rounded-roundedButt w-hugeW mx-auto"
                    />
                  </div>
                )}
                <div className="">
                  <p className="text-4xl py-5 font-light xl:w-biggW break-words">
                    {blog.title}
                  </p>

                  {isLoggedIn && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeBlog(index);
                      }}
                    >
                      <img
                        className="mr-3 w-10 rounded-full hover:opacity-50 duration-300"
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
                          className="w-10 rounded-full hover:opacity-50 duration-300"
                          alt={Edit}
                          src={Edit}
                        />
                      </button>
                    </Link>
                  )}
                </div>
                <p className="text-2xl text-zinc-400 tracking-widest my-3">
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
                  <img alt={eye} src={eye} className="w-8" />
                  <p className=" text-2xl">View: {view}</p>
                </div>

                <p className="text-neutral-500 text-xl xl:w-biggW break-words">
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
