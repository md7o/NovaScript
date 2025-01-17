import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/vs2015.css";
import "../../quill.css";

import hljs from "highlight.js";

const TextEditor = ({ value, onChange }) => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre.ql-syntax");

    codeBlocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [value]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "image"], // Add image button to toolbar
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "code-block",
    "blockquote",
    "color",
    "background",
    "align",
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default TextEditor;
