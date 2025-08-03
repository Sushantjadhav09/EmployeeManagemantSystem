import {Routes, Route, Link, Outlet} from 'react-router-dom'

const AddEmployee = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add Employee Details</h2>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/home/addEmployee/addEmployeePersonalDetails" className="btn btn-primary">
                    Personal Details
                </Link>
                <Link to="/home/addEmployee/addEmployeeProfessionalDetails" className="btn btn-primary">
                    Professional Details
                </Link>
                <Link to="/home/addEmployee/addEmployeeProjectDetails" className="btn btn-primary">
                    Project Details
                </Link>
                <Link to="/home/addEmployee/addEmployeeFinanceDetails" className="btn btn-primary">
                    Finance Details
                </Link>
            </div>

            <Outlet />
        </div>
    );
}
export default AddEmployee
