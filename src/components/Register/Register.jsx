import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.termsAccepted && formData.email && formData.password) {
      navigate("/success");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 px-4 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-md p-6 rounded-lg w-full max-w-md"
      >
        <h1 className="font-bold text-3xl text-center">Create account</h1>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span className="font-semibold text-blue-500">
            <Link to="/login">Login</Link>
          </span>
        </p>

        <div className="flex lg:flex-row flex-col gap-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="pl-5 border border-[#04030899] rounded-[5px] w-[262px] h-[50px] text-[#04030866]"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="pl-5 border border-[#04030899] rounded-[5px] w-[262px] h-[50px] text-[#04030866]"
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="pl-5 border border-[#04030899] rounded-[5px] w-[415px] h-[50px] text-[#04030866]"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="pl-5 border border-[#04030899] rounded-[5px] w-[415px] h-[50px] text-[#04030866]"
          onChange={handleChange}
          required
        />

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="termsAccepted" onChange={handleChange} />
          I agree to DopeSass Terms of service and Privacy policy
        </label>

        <button
          type="submit"
          className="bg-black hover:bg-gray-900 py-2 rounded w-full text-white"
        >
          Create Account
        </button>

        <div className="border-[#04030866] text-gray-400 text-center">or</div>

        <button className="flex justify-center items-center gap-2 py-2 border w-full">
          <img src="./Google.png" className="w-5 h-5" alt="Google Pay" />
          Continue with Google
        </button>

        <button className="flex justify-center items-center gap-2 py-2 border w-full">
          <img src="./Apple.png" className="w-5 h-5" alt="Apple pay" />
          Continue with Apple
        </button>
      </form>
    </div>
  );
}
