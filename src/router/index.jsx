import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserList from "../pages/user/UserList";
import StudentList from "../pages/student/StudentList";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="user-list" element={<UserList/>}/>
      <Route path="student-list" element={<StudentList/>}/>
    </Routes>
  );
}
