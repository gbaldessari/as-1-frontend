import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/HomePage/Home";
import Schedule from "../screens/SchedulePage/Schedule";


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
