import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserList from "../pages/user/UserList";
import StudentList from "../pages/student/StudentList";
import OrgList from "../pages/organization/OrgList";
import RoleList from "../pages/role/RoleList";
import GroupList from "../pages/group/GroupList";
import DepartList from "../pages/department/DepartList";



export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="user-list" element={<UserList/>}/>
      <Route path="student-list" element={<StudentList/>}/>
      <Route path="org-list" element={<OrgList/>}/>
      <Route path="role-list" element={<RoleList/>}/>
      <Route path="group-list" element={<GroupList/>}/>
      <Route path="department-list" element={<DepartList/>}/>
    </Routes>
  );
}
