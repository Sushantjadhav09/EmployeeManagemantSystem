import axios from "axios";

const ENDPOINT = "http://localhost:9095";

class EmployeeEdgeService {
  login(loginObject) {
    /* As Login API is not available in the backend, commenting below API call line and returning the response manually.
    Once the Login API is ready, start using the Login API. The response data-type of the Login API must match the manual response data-type.
    */

    return axios.post(`${ENDPOINT}/login`, loginObject);

    // return {
    //   data: {
    //     userType: "ADMIN",
    //     // userType: "EMPLOYEE",
    //     userId: "1",
    //   },
    // };
  }

  getEmployeePersonalDetails(employeeId) {
    return axios.get(`${ENDPOINT}/getEmployeeByempno/${employeeId}`);
  }

  getEmployeeProfessionDetails(employeeId) {
    return axios.get(`${ENDPOINT}/getprofessiondetailsbyid/${employeeId}`);
  }

  getEmployeeProjectDetails(employeeId) {
    return axios.get(`${ENDPOINT}/getProjectsByEmployeeId/${employeeId}`);
  }

  getEmployeeFinanceDetails(employeeId) {
    return axios.get(`${ENDPOINT}/getfinancedetailsbyid/${employeeId}`);
  }
}

export default new EmployeeEdgeService();
