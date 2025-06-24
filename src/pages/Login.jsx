/*import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", email, password);
    // yahan baad me API call bhi aayega
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;*/
 import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 animate-gradient-x">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-10 w-full max-w-md border border-white/30">
        <h2 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-md animate-pulse">
          👋 Welcome Back!
        </h2>
        <form>
          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-pink-300 transition duration-300"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
          >
            🚀 Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-center text-white mt-6 font-light">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="underline hover:text-pink-200 transition-colors"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

