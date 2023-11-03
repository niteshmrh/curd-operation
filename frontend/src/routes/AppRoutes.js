import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../components/UserDetail/UserDetail";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default AppRoutes;
