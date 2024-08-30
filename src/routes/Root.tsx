import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../components/HomePage/Home";
import Schedule from "../components/SchedulePage/Schedule";

export const AppRoutes: React.FC<{}> = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      {/**
      <Route path="/forgotten" element={<ForgottenPassword/>} />
      <Route path="/recover" element={<ResetPassword/>} />
      <Route path="/schedule" element={<ProtectedRoute><Schedule/></ProtectedRoute>} />*/}
   </Routes>
  );
};
