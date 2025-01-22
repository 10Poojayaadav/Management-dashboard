import React from "react";
import AppRouter from "./router";
import Header from "./component/Header";
import SideBar from "./component/SideBar";

export default function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <header className="p-4 bg-white shadow">
          <h1 className="text-xl font-semibold"><Header/></h1>
        </header>
        <main className="p-4">
          <AppRouter />
        </main>
      </div>
    </div>
  );
}
