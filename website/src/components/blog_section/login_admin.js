import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/login",
        {
          password,
        },
        { withCredentials: true }
      ); // Ensure cookies are sent with the request

      if (response.status === 200) {
        navigate("/blogs"); // Redirect to Blogs page on successful login
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="max-w-lgMw mx-auto">
      <p className="text-3xl text-center my-16">Admin Login</p>
      <label className="flex text-3xl ">ِAdmin Password:</label>
      <input
        className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="text-white text-2xl bg-customPurble rounded-xl p-3 w-full mb-10"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginAdmin;
