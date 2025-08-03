import React, { useContext } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import EmployeeDashboard from "./Employee/Dashboard";
import LoginType from "../../datatype/LoginType";
import { context } from "../../ContextApi";

export default () => {
  const { userData, setUserData } = useContext(context);

  return (
    <div className="dashboard-page">
      {userData.userType === LoginType.EMPLOYEE ? (
        <EmployeeDashboard />
      ) : userData.userType === LoginType.ADMIN ? (
        <AdminDashboard />
      ) : null}
    </div>
  );
};
