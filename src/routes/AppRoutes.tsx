import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import SchedulePage from "../screens/Student/SchedulePage/schedule.page";
import HomePage from "../screens/HomePage/home.page";
import ProjectionPage from "../screens/Student/ProyectionPage/projection.page";
import AdvancementPage from "../screens/Student/AdvancementPage/advancement.page";
import MeshPage from "../screens/Student/MeshPage/mesh.page";

export const AppRoutes: React.FC<{}> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/student/schedule" element={<ProtectedRoute><SchedulePage/></ProtectedRoute>} />
        <Route path="/student/projection" element={<ProtectedRoute><ProjectionPage/></ProtectedRoute>} />
        <Route path="/student/advancement" element={<ProtectedRoute><AdvancementPage/></ProtectedRoute>} />
        <Route path="/student/mesh" element={<ProtectedRoute><MeshPage/></ProtectedRoute>} />
      </Routes>
    </div>
  );
};
