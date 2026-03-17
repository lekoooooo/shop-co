import { useNavigate } from "react-router-dom";

export default function SignupSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-white px-4 min-h-screen">
      <div className="space-y-6 text-center">
        <div className="flex justify-center items-center bg-green-100 mx-auto rounded-full w-20 h-20">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-semibold text-xl">Sign Up successfully</h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-black hover:bg-gray-900 px-6 py-2 rounded text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
