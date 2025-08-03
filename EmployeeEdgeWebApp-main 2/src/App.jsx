import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./components/LoginAndRegister/Login";
import Register from "./components/LoginAndRegister/Register";
import ViewEmployees from "./components/Dashboards/AdminDashboard/ViewEmployees/ViewEmployees";
import ViewEmployee from "./components/Dashboards/AdminDashboard/ViewEmployee/ViewEmployee";
import AddEmployee from "./components/Dashboards/AdminDashboard/AddEmployee/AddEmployee";
import HomePage from "./components/HomePage";
import Home from "./components/Dashboards/Home";
import AddEmployeePersonalDetails from "./components/Dashboards/AdminDashboard/AddEmployee/AddEmployeePersonalDetails";
import AddEmployeeProfessionalDetails from "./components/Dashboards/AdminDashboard/AddEmployee/AddEmployeeProfessionalDetails";
import AddEmployeeProjectDetails from "./components/Dashboards/AdminDashboard/AddEmployee/AddEmployeeProjectDetails";
import AddEmployeeFinanceDetails from "./components/Dashboards/AdminDashboard/AddEmployee/AddEmployeeFinanceDetails";
import UpdateEmployeeProfessionalDetails from "./components/Dashboards/AdminDashboard/ViewEmployee/UpdateEmployeeProfessionalDetails";
import UpdateEmployeePersonalDetails from "./components/Dashboards/AdminDashboard/ViewEmployee/UpdateEmployeePersonalDetails";
import UpdateEmployeeProjectDetails from "./components/Dashboards/AdminDashboard/ViewEmployee/UpdateEmployeeProjectDetails";
import UpdateEmployeeFinanceDetails from "./components/Dashboards/AdminDashboard/ViewEmployee/UpdateEmployeeFinanceDetails";
import ViewProjects from './components/Dashboards/AdminDashboard/ViewEmployee/ViewProjects'

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home/*" element={<Home />}>
        <Route path="" element={<Navigate to="viewEmployees" replace />} />
        <Route path="addEmployee/*" element={<AddEmployee />}>
        <Route path="" element={<Navigate to="addEmployeePersonalDetails" replace />} />
            <Route path='addEmployeePersonalDetails' element={<AddEmployeePersonalDetails />}></Route>
            <Route path='addEmployeeProfessionalDetails' element={<AddEmployeeProfessionalDetails />}></Route>
            <Route path='addEmployeeProjectDetails' element={<AddEmployeeProjectDetails />}></Route>
            <Route path='addEmployeeFinanceDetails' element={<AddEmployeeFinanceDetails />}></Route>
        </Route>
        <Route path="viewEmployees" element={<ViewEmployees />}></Route>
        <Route path='viewEmployee/:employmentCode/*' element={<ViewEmployee />}>
        <Route path="" element={<Navigate to="updateEmployeePersonalDetails" replace />} />
            <Route path='updateEmployeePersonalDetails' element={<UpdateEmployeePersonalDetails />}></Route>
            <Route path='updateEmployeeProfessionalDetails' element={<UpdateEmployeeProfessionalDetails />}></Route>
            <Route path='updateEmployeeProjectDetails/:projectId' element={<UpdateEmployeeProjectDetails />}></Route>
            <Route path='updateEmployeeFinanceDetails' element={<UpdateEmployeeFinanceDetails />}></Route>
            <Route path='viewProjects' element={<ViewProjects />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
