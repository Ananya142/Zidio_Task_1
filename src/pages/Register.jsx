import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 animate-gradient-x bg-[length:200%_200%]">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-10 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-md">
          👤 Create Your Account
        </h2>

        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ayushi Hatwar"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
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

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="text-white text-sm font-medium mb-2 block">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
          >
            ✨ Register
          </button>
        </form>

        <p className="text-sm text-center text-white mt-6 font-light">
          Already have an account?{" "}
          <a
            href="/"
            className="underline hover:text-purple-200 transition-colors"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
