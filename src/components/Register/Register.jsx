import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../api/api";
import { registerSchema } from "../../schema/schema";
const Register = () => {
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
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md p-8 rounded w-full max-w-md">
        <h2 className="mb-6 font-bold text-2xl text-center">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              placeholder="Your name"
              {...register("name")}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              placeholder="you@example.com"
              {...register("email")}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-sm"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              placeholder="Enter password"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 py-2 rounded w-full font-semibold text-white transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
