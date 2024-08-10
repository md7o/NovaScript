import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import LinkedIn from "../../images/linkedin.png";
import Medium from "../../images/medium.png";
import "../../App.css";
import Loading from "../../images/loading.png";

import TextEditor from "./widget/text_editor";
import "react-quill/dist/quill.snow.css";

const colors = ["#DB3C3C", "#164EA1", "#16A180"];

const NewSubject = () => {
  const [formState, setFormState] = useState({
    title: "",
    body: "",
    image: null,
    imageName: "",
    tags: [],
    descreption: "",
    Link1: "",
    Link2: "",
    isChecked1: false,
    isChecked2: false,
    colorIndex: 0,
    publishDate: "",
    loading: false,
    imageLoading: false,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const previousBlogs = location.state?.blogs || [];
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const toggleCheckbox = (checkboxName) => {
    setFormState((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormState((prevState) => ({ ...prevState, imageLoading: true })); // Set image loading state to true
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prevState) => ({
          ...prevState,
          image: reader.result,
          imageName: file.name,
          imageLoading: false,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState((prevState) => ({ ...prevState, loading: true }));

    const newBlog = {
      ...formState,
      publishDate: getCurrentDate(),
    };

    try {
      await axios.post("http://localhost:5000/api/new_subject", newBlog);
      navigate("/blogs", { state: { blogs: [...previousBlogs, newBlog] } });
    } catch (error) {
      console.error("Error adding new subject:", error);
    } finally {
      setFormState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const addTag = () => {
    if (formState.tags.length < 3) {
      const newColor = colors[formState.colorIndex];
      setFormState((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, { value: "NewTag", color: newColor }],
        colorIndex: (prevState.colorIndex + 1) % colors.length,
      }));
    }
  };

  const deleteTag = (index) => {
    setFormState((prevState) => {
      const newTags = [...prevState.tags];
      newTags.splice(index, 1);
      return { ...prevState, tags: newTags };
    });
  };

  const handleTagChange = (index, event) => {
    const newTags = [...formState.tags];
    newTags[index].value = event.target.value;
    setFormState((prevState) => ({ ...prevState, tags: newTags }));
  };

  const getCurrentDate = () => {
    const current = new Date();
    return `${current.toLocaleString("default", {
      month: "long",
    })} ${current.getDate()}, ${current.getFullYear()}`;
  };

  return (
    <div className="text-center max-w-lgMw mx-auto">
      <p className="text-4xl  my-10">Add a new subject</p>
      <form onSubmit={handleSubmit}>
        <label className="flex text-3xl ">Subject Title:</label>
        <input
          className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="text"
          name="title"
          placeholder="Title"
          required
          value={formState.title}
          onChange={handleChange}
        />
        <label className="flex text-3xl mb-5">Subject:</label>
        <TextEditor
          onChange={(value) => setFormState({ ...formState, body: value })}
          value={formState.body}
        />
        <div className="flex justify-evenly items-center my-10 p-1 w-72 mx-auto text-2xl bg-white rounded-lg ">
          <label className="text-2xl truncate text-black">
            {formState.imageName || "No file Chosen"}
          </label>
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

        {formState.imageLoading ? (
          <img
            src={Loading}
            alt="Loading"
            className="my-10 animate-spin w-10 mx-auto"
          />
        ) : formState.image ? (
          <img
            src={formState.image}
            alt="Uploaded"
            className="my-10 mx-auto w-72 rounded-roundedButt"
          />
        ) : (
          <p className="my-16 opacity-50">best resolution: 1920 x 1080</p>
        )}
        <div>
          <button type="button" onClick={addTag} className=" text-4xl">
            +Tag
          </button>
          <div className="flex justify-center items-center gap-5 my-5">
            {formState.tags.map((tag, index) => (
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
        </div>
        <label className="flex text-3xl">Descreption:</label>
        <textarea
          className="my-5 w-full text-2xl border min-h-32 border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="textarea"
          name="descreption"
          placeholder="Descreption"
          required
          value={formState.descreption}
          onChange={handleChange}
        />
        {/* <div>
          <p className="text-white text-4xl mt-10">Available on:</p>
          <PlatformCheckbox
            platform="LinkedIn"
            icon={LinkedIn}
            isChecked={formState.isChecked1}
            onCheckboxToggle={() => toggleCheckbox("isChecked1")}
            link={formState.Link1}
            onLinkChange={handleChange}
            isVisible={formState.isChecked1}
          />
          <PlatformCheckbox
            platform="Medium"
            icon={Medium}
            isChecked={formState.isChecked2}
            onCheckboxToggle={() => toggleCheckbox("isChecked2")}
            link={formState.Link2}
            onLinkChange={handleChange}
            isVisible={formState.isChecked2}
          />
        </div> */}
        {formState.publishDate && (
          <p className="text-3xl text-white">{formState.publishDate}</p>
        )}
        <button
          className="text-white text-2xl bg-customPurble rounded-xl p-3 w-full mb-10"
          type="submit"
          disabled={formState.loading} // Disable the button when loading
        >
          {formState.loading ? (
            <img
              src={Loading}
              alt="Loading..."
              className="animate-spin w-10 mx-auto"
            />
          ) : (
            "Publish"
          )}
        </button>
      </form>
    </div>
  );
};

const PlatformCheckbox = ({
  platform,
  icon,
  isChecked,
  onCheckboxToggle,
  link,
  onLinkChange,
  isVisible,
}) => (
  <>
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center ease-in-out duration-500 hover:opacity-50">
        <img
          className="mr-4 my-5 w-10 rounded-full"
          alt={platform}
          src={icon}
        />
        <p className="text-white text-3xl">{platform}</p>
      </div>
      <input
        onClick={onCheckboxToggle}
        type="checkbox"
        checked={isChecked}
        className="h-6 w-6"
      />
    </div>
    {isVisible && (
      <input
        name={platform === "LinkedIn" ? "Link1" : "Link2"}
        className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
        type="text"
        placeholder={`https://${platform}.com`}
        value={link}
        onChange={onLinkChange}
      />
    )}
  </>
);

export default NewSubject;
