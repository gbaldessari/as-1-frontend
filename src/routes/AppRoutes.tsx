import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Schedule from "../components/SchedulePage/Schedule";


export const AppRoutes: React.FC<{}> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        {/**
        <Route path="/schedule" element={<ProtectedRoute><Schedule/></ProtectedRoute>} />
        */}
      </Routes>
    </div>
  );
};
