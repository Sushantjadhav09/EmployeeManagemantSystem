import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../ContextApi";
import EmployeeEdgeService from "../../services/EmployeeEdge";

export default () => {
  const { userData, setUserData } = useContext(context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeEdgeService.login({
          username: username,
          password: password,
        });
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();

    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-register-container">
      <div className="login-register-box">
        <h2 className="login-register-heading">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="login-form-input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="login-form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
          <p>
            Don't have an account?
            <a href="/register" className="login-register-link">
              Register Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
