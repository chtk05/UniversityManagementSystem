import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import toast, { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import DashBoard from "./pages/DashBoard";
import CourseEnrollMent from "./pages/CourseEnrollMent";
import IndividualCourse from "./pages/IndividualCourse";
import TeacherCourses from "./pages/TeacherCourses";
import GuardedRoute from "./guard/GuardRoute";
import { useAuth } from "./providers/AuthProvider";

axios.defaults.baseURL = "http://localhost:8080/";
function App() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enrollment" element={<CourseEnrollMent />} />
        <Route path="/indicourse" element={<IndividualCourse />} />
        <Route path="/teacher" element={<TeacherCourses />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
