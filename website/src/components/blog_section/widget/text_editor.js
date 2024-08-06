import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "highlight.js/styles/vs2015.css"; // Import Highlight.js theme
import hljs from "highlight.js";
const TextEditor = ({ value, onChange }) => {
  useEffect(() => {
    document.querySelectorAll("pre.ql-syntax").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [value]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "image"], // Add image button to toolbar
      ["code-block"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "code-block",
    "color",
    "background",
    "align",
  ];

  return (
    <ReactQuill
      className="bg-white "
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default TextEditor;
