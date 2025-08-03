import React, { useEffect, useContext } from "react";
import { context } from "../ContextApi";

const HomePage = () => {
  const { userData, setUserData } = useContext(context);

  useEffect(() => {
    setUserData({
      userType: "",
      userId: "",
    });
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to EmployeeEdge</h1>
        <p>
          Efficiently manage your workforce with our comprehensive employee
          management platform.
        </p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Employee Dashboard</h2>
          <p>
            Empower your employees with an intuitive dashboard where they can:
          </p>
          <ul>
            <li>View and update their personal details</li>
            <li>Access pay slips and work schedules</li>
          </ul>
        </div>

        <div className="feature-card">
          <h2>Admin Dashboard</h2>
          <p>Manage your organization effortlessly with features like:</p>
          <ul>
            <li>CRUD operations on employee details</li>
            <li>Department and role management</li>
          </ul>
        </div>
      </section>

      <section className="actions"></section>
    </div>
  );
};

export default HomePage;
