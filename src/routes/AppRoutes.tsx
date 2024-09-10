import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/HomePage/Home";
import Schedule from "../screens/SchedulePage/Schedule";
import ProtectedRoute from "./ProtectedRoutes";
import Projection from "../screens/ProyectionPage/Projection";


export const AppRoutes: React.FC<{}> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student/schedule" element={<ProtectedRoute><Schedule/></ProtectedRoute>} />
        <Route path="/student/projection" element={<ProtectedRoute><Projection/></ProtectedRoute>} />
      </Routes>
    </div>
  );
};
