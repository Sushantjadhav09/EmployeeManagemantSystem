import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewEmployees = () => {
    const [records, setRecords] = useState([]);

    
    const fetchRecords = async () => {
        try {
            const response = await axios.get('http://localhost:9095/getallaemployee');
            setRecords(response.data); 
        } catch (error) {
            console.error('Error fetching employee records:', error);
        }
    };

    
    const handleRemove = async (employmentCode) => {
        try {
            await axios.delete(`http://localhost:9095/DeleteEmployee/${employmentCode}`);
            await axios.delete(`http://localhost:9095/DeleteProfdetails/${employmentCode}`);
            await axios.delete(`http://localhost:9095/deleteFinance/${employmentCode}`);
            await axios.delete(`http://localhost:9095/deleteProjectsByEmployeeId/${employmentCode}`);
            alert('Employee removed successfully');
            fetchRecords(); 
        } catch (error) {
            console.error('Error removing employee:', error);
            alert('There was an issue removing the employee');
        }
    };

    
    useEffect(() => {
        fetchRecords(); 
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const employees = records.slice(firstIndex, lastIndex);
    const noOfPages = Math.ceil(records.length / recordsPerPage);
    const numbers = [...Array(noOfPages + 1).keys()].slice(1);
    console.log(numbers);

    const changeCurrPage = (number) => {
        setCurrentPage(number);
    }

    return (
        <div className='container d-flex flex-column align-items-center justify-content-between' style={{height: "84vh"}}>
            <h2 className="text-center mb-4">Employees List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Employee Id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Mail</th>
                        <th className="text-center">Mobile number</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.length > 0 ? (
                        employees.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center">{employee.empno}</td>
                                    <td className="text-center">{employee.full_name}</td>
                                    <td className="text-center">{employee.personal_mail}</td>
                                    <td className="text-center">{employee.mob_no}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-primary me-3" to={`/home/viewEmployee/${employee.empno}`}>
                                            View/Update
                                        </Link>
                                        <button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            onClick={() => handleRemove(employee.empno)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No employee records found</td>
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
};
export default ViewEmployees;