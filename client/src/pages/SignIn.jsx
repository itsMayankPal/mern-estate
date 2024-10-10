import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-3 max-w-lg mx-auto bg-slate-400 mt-16 rounded-lg shadow-slate-600 shadow-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <div className="flex gap-2 mt-4">
          <p>Dont Have an account?</p>
          <Link to={"/sign-up"}>
            <span className=" text-blue-700 hover:underline">Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
