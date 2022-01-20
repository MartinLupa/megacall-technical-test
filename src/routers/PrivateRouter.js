import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard";

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="/contacts" element={<Dashboard />} />
    </Routes>
  );
};
