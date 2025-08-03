import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeProfessionalDetails = () => {
    const [formData, setFormData] = useState({
        employment_code: '',
        company_mail: '',
        office_phone: '',
        city: '',
        office_address: '',
        reporting_manager_mail: '',
        hr_name: '',
        employment_history: '',
        date_of_joining: ''
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
        
        if (!formData.employment_code || isNaN(formData.employment_code) || formData.employment_code.length > 4) {
            formErrors.employment_code = 'Employment code should be a number less than or equal to 4 digits';
        }

        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.company_mail || !mailRegex.test(formData.company_mail)) {
            formErrors.company_mail = 'Valid company mail is required';
        }

        if (!formData.office_phone || isNaN(formData.office_phone) || formData.office_phone.length < 8 || formData.office_phone.length > 12) {
            formErrors.office_phone = 'Office phone should be between 8 and 12 digits';
        }

        if (!formData.city) {
            formErrors.city = 'City is required';
        }

        if (!formData.office_address) {
            formErrors.office_address = 'Office address is required';
        }

        if (!formData.reporting_manager_mail || !mailRegex.test(formData.reporting_manager_mail)) {
            formErrors.reporting_manager_mail = 'Valid reporting manager mail is required';
        }

        if (!formData.hr_name) {
            formErrors.hr_name = 'HR name is required';
        }

        if (!formData.employment_history) {
            formErrors.employment_history = 'Employment history is required';
        }

        if (!formData.date_of_joining) {
            formErrors.date_of_joining = 'Date of joining is required';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await axios.post('http://localhost:9095/addprofdetails', formData);
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
                            name="employment_code"
                            className="form-control"
                            value={formData.employment_code}
                            onChange={handleChange}
                        />
                        {errors.employment_code && <div className="text-danger">{errors.employment_code}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Company mail</label>
                        <input
                            type="email"
                            name="company_mail"
                            className="form-control"
                            value={formData.company_mail}
                            onChange={handleChange}
                        />
                        {errors.company_mail && <div className="text-danger">{errors.company_mail}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Office phone</label>
                        <input
                            type="text"
                            name="office_phone"
                            className="form-control"
                            value={formData.office_phone}
                            onChange={handleChange}
                        />
                        {errors.office_phone && <div className="text-danger">{errors.office_phone}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >City</label>
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Office address</label>
                        <textarea
                            name="office_address"
                            className="form-control"
                            value={formData.office_address}
                            onChange={handleChange}
                        ></textarea>
                        {errors.office_address && <div className="text-danger">{errors.office_address}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Reporting manager mail</label>
                        <input
                            type="email"
                            name="reporting_manager_mail"
                            className="form-control"
                            value={formData.reporting_manager_mail}
                            onChange={handleChange}
                        />
                        {errors.reporting_manager_mail && <div className="text-danger">{errors.reporting_manager_mail}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >HR name</label>
                        <input
                            type="text"
                            name="hr_name"
                            className="form-control"
                            value={formData.hr_name}
                            onChange={handleChange}
                        />
                        {errors.hr_name && <div className="text-danger">{errors.hr_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Employment history</label>
                        <textarea
                            name="employment_history"
                            className="form-control"
                            value={formData.employment_history}
                            onChange={handleChange}
                        ></textarea>
                        {errors.employment_history && <div className="text-danger">{errors.employment_history}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Date of joining</label>
                        <input
                            type="date"
                            name="date_of_joining"
                            className="form-control"
                            value={formData.date_of_joining}
                            onChange={handleChange}
                        />
                        {errors.date_of_joining && <div className="text-danger">{errors.date_of_joining}</div>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>    
    );
};

export default AddEmployeeProfessionalDetails;
