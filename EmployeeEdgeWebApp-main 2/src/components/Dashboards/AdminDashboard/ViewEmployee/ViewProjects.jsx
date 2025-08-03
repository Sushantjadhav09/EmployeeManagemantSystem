import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewProjects = () => {
    const [records, setRecords] = useState([]);
    const { employmentCode } = useParams();
    console.log(employmentCode);
    
    const fetchRecords = async () => {
        try {
            const response = await axios.get(`http://localhost:9095/getProjectsByEmployeeId/${employmentCode}`);
            setRecords(response.data); 
        } catch (error) {
            console.error('Error fetching project records:', error);
        }
    };

    
    const handleRemove = async (project_id) => {
        try {
            await axios.delete(`http://localhost:9095/DeleteProjectdetails/${project_id}`);
            alert('Project removed successfully');
            fetchRecords(); 
        } catch (error) {
            console.error('Error removing project:', error);
            alert('There was an issue removing the project');
        }
    };

    
    useEffect(() => {
        fetchRecords(); 
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const projects = records.slice(firstIndex, lastIndex);
    const noOfPages = Math.ceil(records.length / recordsPerPage);
    const numbers = [...Array(noOfPages + 1).keys()].slice(1);
    console.log(numbers);

    const changeCurrPage = (number) => {
        setCurrentPage(number);
    }

    return (
        <div className='container d-flex flex-column align-items-center justify-content-between' style={{height: "70vh"}}>
            <table className="mt-5 table table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Project Id</th>
                        <th className="text-center">Project name</th>
                        <th className="text-center">Start date</th>
                        <th className="text-center">End date</th>
                        <th className="text-center">Manager Id</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.length > 0 ? (
                        projects.map((project, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center">{project.project_id}</td>
                                    <td className="text-center">{project.client_or_project_name}</td>
                                    <td className="text-center">{project.start_date}</td>
                                    <td className="text-center">{project.end_date}</td>
                                    <td className="text-center">{project.reporting_manager_code}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-primary me-3" to={`/home/viewEmployee/${employmentCode}/updateEmployeeProjectDetails/${project.project_id}`}>
                                            Update
                                        </Link>
                                        <button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            onClick={() => handleRemove(project.project_id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No project records found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
            <ul class="pagination">
                {
                    numbers.map((number, index) => {
                        return (
                            <li key={index} class="page-item">
                                <a class="page-link" href="#" onClick={() => (changeCurrPage(number))} >{number}</a>
                            </li>
                        );
                    })
                }        
            </ul> 
        </div>
    );
}
export default ViewProjects