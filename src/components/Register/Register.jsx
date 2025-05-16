import React, { useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";

const Register = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    setTimeout(() => {
      login({
        name: formData.name,
        email: formData.email,
      });

      alert("Registered and logged in successfully!");
    }, 500);
  };

  return (
    <div className="mx-auto p-4 max-w-md register-form">
      <h2 className="mb-4 font-bold text-2xl">Register</h2>
      {error && <p className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-2 border rounded w-full"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 border rounded w-full"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="px-3 py-2 border rounded w-full"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
