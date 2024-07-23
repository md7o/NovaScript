import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LinkedIn from "../../images/linkedin.png";
import Medium from "../../images/medium.png";
import "../../App.css";
import TextEditor from "./widget/text_editor";
import "react-quill/dist/quill.snow.css";

const colors = ["#DB3C3C", "#164EA1", "#16A180"];

const NewSubject = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [tag, setTag] = useState([]);
  const [Link1, setLink1] = useState("");
  const [Link2, setLink2] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [publishDate, setPublishDate] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const previousBlogs = location.state?.blogs || [];
  const fileInputRef = React.useRef(null);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };
  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
  };

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

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const publishDate = getCurrentDate();
    const newBlog = {
      title,
      body,
      image,
      tag,
      isChecked1,
      isChecked2,
      Link1,
      Link2,
      publishDate,
    };

    navigate("/blogs", { state: { blogs: [...previousBlogs, newBlog] } });
  };

  const addTag = () => {
    if (tag.length < 3) {
      const newColor = colors[colorIndex];
      setTag([...tag, { value: "NewTag", color: newColor }]);
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }
  };

  const deleteTags = (index) => {
    const removetag = [...tag];
    removetag.splice(index, 1);
    setTag(removetag);
  };

  const handleTagChange = (index, event) => {
    const newTag = [...tag];
    newTag[index].value = event.target.value;
    setTag(newTag);
  };

  const getCurrentDate = () => {
    const current = new Date();
    return `${current.toLocaleString("default", {
      month: "long",
    })} ${current.getDate()}, ${current.getFullYear()}`;
  };

  return (
    <div className="text-center max-w-lgMw mx-auto">
      <h1 className="text-4xl text-white my-10">Add a new subject</h1>
      <form onSubmit={handleSubmit}>
        <label className="flex text-3xl text-white">Subject Title:</label>
        <input
          className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="flex text-3xl text-white mb-5">Subject:</label>
        <TextEditor onChange={setBody} value={body} />
        <div className="flex justify-evenly items-center my-10 p-1 w-72 mx-auto text-2xl bg-white rounded-lg ">
          {imageName ? (
            <label className="text-2xl truncate text-black">{imageName}</label>
          ) : (
            <label className="text-2xl truncate text-black">
              No file Chosen
            </label>
          )}

          <input
            ref={fileInputRef}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="text-2xl bg-customPurble text-white rounded-lg p-4 hover:bg-blue-700"
            type="button"
            onClick={handleButtonClick}
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
        <div>
          <button
            type="button"
            onClick={addTag}
            className="text-white text-4xl "
          >
            +Tag
          </button>
          <div className="flex justify-center items-center gap-5 my-10">
            {tag.map((tag, index) => (
              <div key={index} className="mt-2">
                <input
                  type="text"
                  value={tag.value}
                  onChange={(event) => handleTagChange(index, event)}
                  className=" w-full rounded-lg text-center text-white focus:outline-none text-2xl"
                  style={{ backgroundColor: tag.color }}
                />
                <button
                  onClick={() => deleteTags(index)}
                  type="button"
                  className=" text-red-400 mt-3"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-4xl mt-10">Available on:</p>

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center ease-in-out duration-500 hover:opacity-50">
              <img
                className="mr-4 my-5 w-10 rounded-full"
                alt={LinkedIn}
                src={LinkedIn}
              />
              <p className="text-white text-3xl">LinkedIn</p>
            </div>
            <input
              onClick={toggleCheckbox1}
              value={isChecked1}
              type="checkbox"
              className="h-6 w-6"
            />
          </div>

          <input
            style={{ display: isChecked1 ? "block" : "none" }}
            className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
            type="text"
            placeholder={`https://LinkedIn.com`}
            value={Link1}
            onChange={(e) => setLink1(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center ease-in-out duration-500 hover:opacity-50">
              <img
                className="mr-4 my-5 w-10 rounded-full"
                alt={Medium}
                src={Medium}
              />
              <p className="text-white text-3xl">Medium</p>
            </div>
            <input
              onClick={toggleCheckbox2}
              value={isChecked2}
              type="checkbox"
              className="h-6 w-6"
            />
          </div>

          <input
            style={{ display: isChecked2 ? "block" : "none" }}
            className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
            type="text"
            placeholder={`https://Medium.com`}
            value={Link2}
            onChange={(e) => setLink2(e.target.value)}
          />
        </div>
        {publishDate && <p className="text-3xl text-white">{publishDate}</p>}
        <button className="text-white text-2xl bg-customPurble rounded-xl p-3 w-full mb-10 ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewSubject;
