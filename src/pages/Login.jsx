import React from "react";
import bgImage from "../assets/excel-login.jpg"; // Adjust path if needed

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (Darken or Blur if needed) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Login Box */}
      <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-10 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">
          Welcome to Excel Analytics 📊
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg shadow-md hover:scale-[1.02] transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-white">
          Don’t have an account?{" "}
          <a href="/register" className="underline hover:text-pink-200">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
