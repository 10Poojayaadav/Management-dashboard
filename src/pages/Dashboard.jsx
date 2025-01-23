import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/icons/user.svg";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const studentStrengthData = {
    labels: [
      "Computer Science",
      "Mechanical",
      "Electrical",
      "Civil",
      "Biotech",
    ],
    datasets: [
      {
        label: "Student Strength",
        data: [120, 90, 150, 80, 60],
        backgroundColor: "#F8A601",
        borderColor: "#F8A601",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Student Strength by Department",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="h-full p-2 bg-[#f0efef] dark:bg-gray-800 dark:text-white rounded-lg shadow-md">
    <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
      {/* Dashboard Links */}
      <Link
        to="/bookings"
        className="min-h-[175px] bg-white dark:bg-gray-700 dark:border-gray-600 dark:hover:border-[#F8A601] p-5 rounded-md border-b-4 border-b-transparent ease-in-out duration-300 hover:border-b-[#F8A601] max-lg:min-h-[100px] max-md:p-3"
        style={{ boxShadow: "0 6px 9px 0 #0000000D" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="min-h-[40px] w-[40px] rounded-full bg-[#F8A60126] flex justify-center items-center">
            <img src={userIcon} alt="Bookings" />
          </div>
          <p className="text-[#00000099] dark:text-gray-300 text-[15px] max-sm:text-[14px]">
            Total Student
          </p>
        </div>
      </Link>

      <Link
        to="/vehicles"
        className="min-h-[175px] bg-white dark:bg-gray-700 dark:border-gray-600 dark:hover:border-rose-600 p-5 rounded-md border-b-4 border-b-transparent ease-in-out duration-300 hover:border-b-rose-600 max-lg:min-h-[100px] max-md:p-3"
        style={{ boxShadow: "0 6px 9px 0 #0000000D" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="min-h-[40px] w-[40px] rounded-full bg-[#F8A60126] flex justify-center items-center">
            <img src={userIcon} alt="Vehicles" />
          </div>
          <p className="text-[#00000099] dark:text-gray-300 text-[15px] max-sm:text-[14px]">
            Total Group
          </p>
        </div>
      </Link>

      <Link
        to="/customer-travel"
        className="min-h-[175px] bg-white dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-600 p-5 rounded-md border-b-4 border-b-transparent ease-in-out duration-300 hover:border-b-blue-600 max-lg:min-h-[100px] max-md:p-3"
        style={{ boxShadow: "0 6px 9px 0 #0000000D" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="min-h-[40px] w-[40px] rounded-full bg-[#F8A60126] flex justify-center items-center">
            <img src={userIcon} alt="Revenue" />
          </div>
          <p className="text-[#00000099] dark:text-gray-300 text-[15px] max-sm:text-[14px]">
            Total Active User
          </p>
        </div>
      </Link>
    </div>

    {/* Chart Section */}
    <div
      className="mt-8 bg-white dark:bg-gray-700 dark:text-white p-5 rounded-md"
      style={{ boxShadow: "0 6px 9px 0 #0000000D" }}
    >
      <Bar data={studentStrengthData} options={options} />
    </div>
  </section>
  );
};

export default Dashboard;
