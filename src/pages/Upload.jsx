import React, { useState } from "react";
import axios from "axios";
import ChartRenderer from "../components/ChartRenderer";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [showChart, setShowChart] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("excel", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // optional auth header
        },
      });

      setMessage("File uploaded successfully!");
      setShowChart(true);
      console.log("Upload response:", res.data);
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("Upload failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-300 to-pink-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Excel File</h1>

        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="mb-4 w-full"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Upload
        </button>

        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>

      {/* Chart rendering after upload */}
      {showChart && (
        <div className="mt-10">
          <ChartRenderer
            chartType="bar"
            labels={["Jan", "Feb", "Mar", "Apr"]}
            values={[100, 200, 150, 250]}
          />
        </div>
      )}
    </div>
  );
};

export default Upload;

