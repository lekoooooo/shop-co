import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export default function LogIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://6824e1930f0188d7e72b3ad7.mockapi.io/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const users = await response.json();
      const user = users.find(
        (u) => u.email === loginData.email && u.password === loginData.password
      );

      if (user) {
        login({
          id: user.id,
          name: user.name || "User",
          email: user.email,
        });

        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 px-4 min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h2 className="mb-1 font-bold text-2xl">Welcome Back</h2>
        <p className="mb-6 text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <div className="bg-red-100 mb-4 p-2 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="top-2.5 right-3 absolute text-gray-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex justify-end text-sm">
            <button type="button" className="text-gray-600 hover:underline">
              Forgot Password
            </button>
          </div>

          <button
            type="submit"
            className="bg-black hover:bg-gray-800 py-2 rounded-md w-full text-white transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 mb-3 text-gray-500 text-sm text-center">or</p>

        <button className="flex justify-center items-center hover:bg-gray-100 mb-3 py-2 border border-gray-300 rounded-md w-full transition">
          <img
            src="./Google.png"
            alt="Google"
            className="mr-2 w-[30px] h-[30px]"
          />
          Continue with Google
        </button>

        <button className="flex justify-center items-center hover:bg-gray-100 py-2 border border-gray-300 rounded-md w-full transition">
          <img
            src="./Apple.png"
            alt="Apple"
            className="mr-2 w-[30px] h-[30px]"
          />
          Continue with Apple
        </button>
      </div>
    </div>
  );
}
