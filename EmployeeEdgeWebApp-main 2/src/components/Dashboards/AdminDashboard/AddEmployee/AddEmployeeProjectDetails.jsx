import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeProjectDetails = () => {
    const [formData, setFormData] = useState({
        project_code: '',
        start_date: '',
        end_date: '',
        client_or_project_name: '',
        reporting_manager_code: '',
        employee_id: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        
        if (!formData.employee_id || isNaN(formData.employee_id) || formData.employee_id.length > 4) {
            formErrors.employee_id = 'Employee Id should be a number less than or equal to 4 digits';
        }

        if (!formData.project_code || isNaN(formData.project_code) || formData.project_code.length > 4) {
            formErrors.project_code = 'Project code should be a number less than or equal to 4 digits';
        }

        if (!formData.start_date) {
            formErrors.start_date = 'Start date is required';
        }

        if (!formData.end_date) {
            formErrors.end_date = 'End date is required';
        }

        if (!formData.client_or_project_name) {
            formErrors.client_or_project_name = 'Client or project name is required';
        }

        if (!formData.reporting_manager_code || isNaN(formData.reporting_manager_code) || formData.reporting_manager_code.length > 4) {
            formErrors.reporting_manager_code = 'Reporting manager code should be a number less than or equal to 4 digits';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await axios.post('http://localhost:9095/addprojectsdetails', formData);
                alert('Form submitted successfully');
            } catch (error) {
                console.error('There was an error submitting the form', error);
            }
        }
    };

    return (
        <div className="row justify-content-center my-5 mx-0 w-100">
            <div class="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" >Employee Id</label>
                        <input
                            type="text"
                            name="employee_id"
                            className="form-control"
                            value={formData.employee_id}
                            onChange={handleChange}
                        />
                        {errors.employee_id && <div className="text-danger">{errors.employee_id}</div>}
                    </div>


                    <div className="form-group">
                        <label className="form-label" >Project code</label>
                        <input
                            type="text"
                            name="project_code"
                            className="form-control"
                            value={formData.project_code}
                            onChange={handleChange}
                        />
                        {errors.project_code && <div className="text-danger">{errors.project_code}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Start date</label>
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
                        <label className="form-label" >End date</label>
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
                        <label className="form-label" >Client or project name</label>
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
                        <label className="form-label" >Reporting manager id</label>
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
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>    
                </form>
            </div>
        </div>        
    );
};

export default AddEmployeeProjectDetails;
