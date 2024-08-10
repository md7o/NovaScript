import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import TextEditor from "./widget/text_editor";
import "../../App.css";

const colors = ["#DB3C3C", "#164EA1", "#16A180"];

const EditBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog, index } = location.state || { blog: {}, index: null };
  const [title, setTitle] = useState(blog.title || "");
  const [body, setBody] = useState(blog.body || "");
  const [image, setImage] = useState(blog.image || "");
  const [imageName, setImageName] = useState(
    blog.image ? "Image Uploaded" : ""
  );
  const [tags, setTags] = useState(blog.tags || []);
  const [colorIndex, setColorIndex] = useState(0);
  const [descreption, setdescreption] = useState(blog.descreption || []);
  const [publishDate, setpublishDate] = useState(blog.publishDate || []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (tags.length < 3) {
      const newColor = colors[colorIndex];
      setTags([...tags, { value: "NewTag", color: newColor }]);
      setColorIndex((colorIndex + 1) % colors.length);
    }
  };

  const getCurrentDate = () => {
    const current = new Date();
    return `${current.toLocaleString("default", {
      month: "long",
    })} ${current.getDate()}, ${current.getFullYear()}`;
  };

  const handleTagChange = (index, event) => {
    const newTags = [...tags];
    newTags[index].value = event.target.value;
    setTags(newTags);
  };

  const deleteTag = (index) => {
    const newTags = tags.filter((_, tagIndex) => tagIndex !== index);
    setTags(newTags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedPublishDate = getCurrentDate(publishDate);
    const updatedBlog = {
      title,
      body,
      image,
      tags,
      descreption,
      publishDate: formattedPublishDate,
    };

    try {
      await axios.put(`http://localhost:5000/api/blogs/${index}`, updatedBlog);
      navigate("/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="text-center max-w-lgMw mx-auto">
      <p className="text-4xl my-10">Edit Blog</p>
      <form onSubmit={handleSubmit}>
        <label className="flex text-3xl ">Subject Title:</label>
        <input
          className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="flex text-3xl  mb-5">Subject:</label>
        <TextEditor onChange={setBody} value={body} />
        <div className="flex justify-evenly items-center my-10 p-1 w-72 mx-auto text-2xl bg-white rounded-lg">
          {imageName ? (
            <label className="text-2xl truncate text-black">{imageName}</label>
          ) : (
            <label className="text-2xl truncate text-black">
              No file Chosen
            </label>
          )}
          <input
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="text-2xl bg-customPurble text-white rounded-lg p-4 hover:bg-blue-700"
            type="button"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Upload
          </button>
        </div>
        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="my-10 mx-auto w-72 rounded-roundedButt"
          />
        )}
        <button type="button" onClick={addTag} className=" text-4xl">
          +Tag
        </button>
        <div className="flex justify-center items-center gap-5 my-10">
          {tags.map((tag, index) => (
            <div key={index} className="mt-2">
              <input
                type="text"
                value={tag.value}
                onChange={(event) => handleTagChange(index, event)}
                className="w-full rounded-lg text-center text-white focus:outline-none text-2xl"
                style={{ backgroundColor: tag.color }}
              />
              <button
                onClick={() => deleteTag(index)}
                type="button"
                className="text-red-400 mt-3"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
        <label className="flex text-3xl ">Descreption:</label>
        <textarea
          className="my-5 w-full text-2xl border min-h-32 border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="textarea"
          name="descreption"
          placeholder="Descreption"
          required
          value={descreption}
          onChange={(e) => setdescreption(e.target.value)}
        />
        <button className="text-white text-2xl bg-customPurble rounded-xl p-3 w-full mb-10">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
