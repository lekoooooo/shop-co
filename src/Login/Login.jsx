import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../api/api";
import { registerSchema } from "../schema/schema";
import Header from "../components/Header/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("create account");
    },
    onError: () => {
      setError("root", { message: "something is wrong" });
    },
  });

  return (
    <div className="flex lg:flex lg:justify-center items-center bg-gray-50 px-4 min-h-screen">
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

        {errors.root && (
          <div className="bg-red-100 mb-4 p-2 rounded text-red-700 text-sm">
            {errors.root.message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full"
              {...register("email")}
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full"
              {...register("password")}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
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
            Log in
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
};

export default Login;
