import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register chart types
ChartJS.register(
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const ChartRenderer = ({ chartType, labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: values,
        backgroundColor: [
          "#7C3AED", "#F472B6", "#34D399", "#60A5FA", "#FBBF24", "#F87171"
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: `Your ${chartType} Chart`,
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      default:
        return <p>No chart type selected.</p>;
    }
  };

  return <div className="w-full max-w-3xl mx-auto mt-10">{renderChart()}</div>;
};

export default ChartRenderer;
