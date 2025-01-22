import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
     <div className="h-auto w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link
          to="/"
          className="block px-4 py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/user-list"
          className="block px-4 py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
        >
         User
        </Link>
        <Link
          to="/student-list"
          className="block px-4 py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
        >
          Student
        </Link>
        <Link
          to="/logout"
          className="block px-4 py-2 rounded hover:bg-gray-700 focus:bg-gray-700"
        >
          Logout
        </Link>
      </nav>
    </div>

      
    </>
  );
};

export default SideBar;
