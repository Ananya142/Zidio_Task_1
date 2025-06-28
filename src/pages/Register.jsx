import React from "react";
import bgImage from "../assets/excel-login.jpg"; // Make sure image exists here

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Registration Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">
          Create Your Account ✨
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ayushi Hatwar"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-white font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg shadow-md hover:scale-[1.02] transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-white">
          Already have an account?{" "}
          <a href="/" className="underline hover:text-pink-200">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
