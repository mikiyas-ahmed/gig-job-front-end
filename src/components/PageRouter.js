import React from 'react'
import Home from "../pages/home_component/Home";
import Contact from "../pages/contact_component/Contact";
import Project from "../pages/project_component/Project";
import About from "../pages/about_component/About";
import JobDetail from "../pages/job-detai/JobDetail";
import UserRegisterPage from '../pages/register-page/UserRegisterPage';
import { Routes,Route } from "react-router-dom";

const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER:"Admin User"
};
const CURRENT_USER_TYPE= USER_TYPES.PUBLIC;
export default function PageRouter() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/job-detail" element={<JobDetail/>} />
        <Route exact path="/register" element={<UserRegisterPage/>} />
    </Routes>
  )
}
