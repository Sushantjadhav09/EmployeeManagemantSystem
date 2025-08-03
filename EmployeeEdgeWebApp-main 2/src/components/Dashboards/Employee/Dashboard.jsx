import React, { useState, useEffect, useContext } from "react";
import EmployeeEdgeService from "../../../services/EmployeeEdge";
import { context } from "../../../ContextApi";
import PersonalDetails from "./PersonalDetails";
import FinanceDetails from "./FinanceDetails";
import ProjectDetails from "./ProjectDetails";
import ProfessionalDetails from "./ProfessionalDetails";

export default () => {
  const { userData, setUserData } = useContext(context);
  const [activeTab, setActiveTab] = useState("personal");
  const [professionDetails, setProfessionDetails] = useState(null);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [financeDetails, setFinanceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchPersonalData();
      await fetchProfessionalData();
      await fetchProjectData();
      await fetchFinanceData();

      setLoading(false);
    };
    fetchData();
  }, []);

  const fetchPersonalData = async () => {
    try {
      const response = await EmployeeEdgeService.getEmployeePersonalDetails(
        userData.userId
      );
      setPersonalDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfessionalData = async () => {
    try {
      const response = await EmployeeEdgeService.getEmployeeProfessionDetails(
        userData.userId
      );
      setProfessionDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjectData = async () => {
    try {
      const response = await EmployeeEdgeService.getEmployeeProjectDetails(
        userData.userId
      );
      setProjectDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFinanceData = async () => {
    try {
      const response = await EmployeeEdgeService.getEmployeeFinanceDetails(
        userData.userId
      );
      setFinanceDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderTabContent = () => {
    if (!loading)
      switch (activeTab) {
        case "personal":
          console.log(personalDetails);
          return <PersonalDetails details={personalDetails} />;
        case "professional":
          return <ProfessionalDetails details={professionDetails} />;
        case "projects":
          return <ProjectDetails details={projectDetails} />;
        case "finance":
          return <FinanceDetails details={financeDetails} />;
        default:
          return null;
      }
  };

  return (
    <div className="employee-details-page">
      <div className="tab-navigation">
        <button
          className={activeTab === "personal" ? "active" : ""}
          onClick={() => setActiveTab("personal")}
        >
          Personal Details
        </button>
        <button
          className={activeTab === "professional" ? "active" : ""}
          onClick={() => setActiveTab("professional")}
        >
          Professional Details
        </button>
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Project Details
        </button>
        <button
          className={activeTab === "finance" ? "active" : ""}
          onClick={() => setActiveTab("finance")}
        >
          Finance Details
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};
