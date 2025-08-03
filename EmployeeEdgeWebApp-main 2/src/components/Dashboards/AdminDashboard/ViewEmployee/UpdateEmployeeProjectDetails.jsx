import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ViewEmployee.css'

const UpdateEmployeeProjectDetails = () => {

    const [formData, setFormData] = useState({
        project_id: '',
        employee_id: '',
        client_or_project_name: '',
        start_date: '',
        end_date: '',
        reporting_manager_code: ''
    });

    const [errors, setErrors] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    const { projectId } = useParams();

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(`http://localhost:9095/getProject/${projectId}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        if (projectId) {
            fetchProjectData();
        }
    }, [projectId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.project_id || isNaN(formData.project_id) || formData.project_id.length > 4) {
            formErrors.project_id = 'Project Id should be a number less than or equal to 4 digits';
        }

        if (!formData.employee_id || isNaN(formData.employee_id) || formData.employee_id.length > 4) {
            formErrors.employee_id = 'Employee Id should be a number less than or equal to 4 digits';
        }

        if (!formData.client_or_project_name) {
            formErrors.client_or_project_name = 'Project name is required';
        }

        if (!formData.start_date) {
            formErrors.start_date = 'Start date is required';
        }

        if (!formData.end_date) {
            formErrors.end_date = 'End date is required';
        }

        if (!formData.reporting_manager_code || isNaN(formData.reporting_manager_code) || formData.reporting_manager_code.length > 4) {
            formErrors.reporting_manager_code = 'Manager Id should be a number less than or equal to 4 digits';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setShowConfirmation(true);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:9095/updateproject/${formData.project_id}`, formData);
            alert('Project data updated successfully');
            setShowConfirmation(false);
        } catch (error) {
            console.error('Error updating project data:', error);
        }
    };

    return (
        <div className="row justify-content-center my-5 mx-0 w-100">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Project ID</label>
                        <input
                            type="text"
                            name="project_id"
                            className="form-control"
                            value={formData.project_id}
                            onChange={handleChange}
                            disabled
                        />
                        {errors.project_id && <div className="text-danger">{errors.project_id}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Employee ID</label>
                        <input
                            type="text"
                            name="employee_id"
                            className="form-control"
                            value={formData.employee_id}
                            onChange={handleChange}
                            disabled
                        />
                        {errors.employee_id && <div className="text-danger">{errors.employee_id}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Project Name</label>
                        <input
                            type="text"
                            name="client_or_project_name"
                            className="form-control"
                            value={formData.client_or_project_name}
                            onChange={handleChange}
                        />
                        {errors.client_or_project_name && <div className="text-danger">{errors.client_or_project_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Start Date</label>
                        <input
                            type="date"
                            name="start_date"
                            className="form-control"
                            value={formData.start_date}
                            onChange={handleChange}
                        />
                        {errors.start_date && <div className="text-danger">{errors.start_date}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">End Date</label>
                        <input
                            type="date"
                            name="end_date"
                            className="form-control"
                            value={formData.end_date}
                            onChange={handleChange}
                        />
                        {errors.end_date && <div className="text-danger">{errors.end_date}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Manager ID</label>
                        <input
                            type="text"
                            name="reporting_manager_code"
                            className="form-control"
                            value={formData.reporting_manager_code}
                            onChange={handleChange}
                        />
                        {errors.reporting_manager_code && <div className="text-danger">{errors.reporting_manager_code}</div>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3">Update</button>
                    </div>
                </form>
            </div>

            {showConfirmation && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to update the project data?</p>
                        <button className="btn btn-success my-3 col-3" onClick={handleUpdate}>Yes</button>
                        <button className="btn btn-danger col-3" onClick={() => setShowConfirmation(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateEmployeeProjectDetails;
