import {Routes, Route, Link, Outlet, useParams} from 'react-router-dom'

const ViewEmployee = () => {
    const { employmentCode } = useParams();
    
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">View or Update Employee Details</h2>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to={`/home/viewEmployee/${employmentCode}/updateEmployeePersonalDetails`} className="btn btn-primary">
                    Personal Details
                </Link>
                <Link to={`/home/viewEmployee/${employmentCode}/updateEmployeeProfessionalDetails`} className="btn btn-primary">
                    Professional Details
                </Link>
                <Link to={`/home/viewEmployee/${employmentCode}/viewProjects`} className="btn btn-primary">
                    Project Details
                </Link>
                <Link to={`/home/viewEmployee/${employmentCode}/updateEmployeeFinanceDetails`} className="btn btn-primary">
                    Finance Details
                </Link>
            </div>

            <Outlet />
        </div>
    );
}
export default ViewEmployee
