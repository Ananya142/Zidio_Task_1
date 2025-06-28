import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("excel", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setMessage("File uploaded successfully!");
      console.log("Response:", res.data); // You’ll use this to generate dropdowns later
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-300 to-pink-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Excel File</h1>

        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="mb-4 w-full"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Upload
        </button>

        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default Upload;
