import {Routes, Route, Link, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      navigate("/");
    };

    return (
        <div className="container-fluid p-0">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-4 border-bottom" style={{ backgroundColor: '#1d2b38' }}>
                <div className="col-md-3 mb-2 mb-md-0 ms-2">
                    <Link
                    to="/home/viewEmployees"
                    className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
                    >
                        <span className="fs-5 text-white">EmployeeEdge</span>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link className="nav-link px-2 link-secondary text-white" to="/home/viewEmployees">View Employees</Link></li>
                    <li><Link className="nav-link px-2 link-secondary text-white" to="/home/addEmployee">Add Employee</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button
                        type="button"
                        className="btn btn-danger me-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </header>

            <Outlet />
        </div>
    );
};
export default AdminDashboard;