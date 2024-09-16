import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import SchedulePage from "../screens/Student/SchedulePage/schedule.page";
import HomePage from "../screens/HomePage/home.page";
import ProjectionPage from "../screens/Student/ProyectionPage/projection.page";
import AdvancementPage from "../screens/Student/AdvancementPage/advancement.page";

export const AppRoutes: React.FC<{}> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/student/schedule" element={<ProtectedRoute><SchedulePage/></ProtectedRoute>} />
        <Route path="/student/projection" element={<ProtectedRoute><ProjectionPage/></ProtectedRoute>} />
        <Route path="/student/advancement" element={<ProtectedRoute><AdvancementPage/></ProtectedRoute>} />
      </Routes>
    </div>
  );
};
