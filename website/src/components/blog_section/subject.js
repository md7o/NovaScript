import React, { useEffect } from "react";
import "../../App.css";
import "../quill.css";
import { useLocation } from "react-router-dom";
import "highlight.js/styles/vs2015.css";
import hljs from "highlight.js";

const Subject = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  useEffect(() => {
    document.querySelectorAll("pre.ql-syntax").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [blog.body]);

  return (
    <div className=" 2.5xl:w-1/3 2xl:w-1/2 lg:w-2/3 md:w-3/4 w-full mx-auto p-10">
      <h1 className="text-white text-start 2xl:text-5xl md:text-4xl text-3xl font-bold">
        {blog.title}
      </h1>
      <div className="flex gap-1 mx-auto mt-5 ">
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

      <p className="text-xl text-white my-3">{blog.publishDate}</p>

      <div className="bg-gray-200 opacity-35 h-line w-full mx-auto mb-16" />

      <p
        className=" text-white text-2xl w-full  ql-editor"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

export default Subject;
