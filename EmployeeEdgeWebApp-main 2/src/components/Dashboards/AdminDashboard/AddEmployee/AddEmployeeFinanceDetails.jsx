import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeFinanceDetails = () => {
    const [formData, setFormData] = useState({
        id: '',
        pan_card: '',
        aadhar_card: '',
        bank_name: '',
        branch_name: '',
        ifsc_code: '',
        ctc_breakup: ''
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

        if (!formData.id || isNaN(formData.id) || formData.id.length > 4) {
            formErrors.id = 'ID should be a number less than or equal to 4 digits';
        }

        const panRegex = /^[A-Z0-9]{10}$/;
        if (!formData.pan_card || !panRegex.test(formData.pan_card)) {
            formErrors.pan_card = 'PAN card should be a 10-digit alphanumeric number';
        }

        if (!formData.aadhar_card || isNaN(formData.aadhar_card) || formData.aadhar_card.length !== 12) {
            formErrors.aadhar_card = 'Aadhar card should be a 12-digit number';
        }

        if (!formData.bank_name) {
            formErrors.bank_name = 'Bank name is required';
        }

        if (!formData.branch_name) {
            formErrors.branch_name = 'Branch name is required';
        }

        const ifscRegex = /^[A-Z0-9]{11}$/;
        if (!formData.ifsc_code || !ifscRegex.test(formData.ifsc_code)) {
            formErrors.ifsc_code = 'IFSC code should be an 11-digit alphanumeric code';
        }

        if (!formData.ctc_breakup || isNaN(formData.ctc_breakup) || formData.ctc_breakup.length > 8) {
            formErrors.ctc_breakup = 'CTC breakup should be a number less than or equal to 8 digits';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await axios.post('http://localhost:9095/addFinance_details', formData);
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
                            name="id"
                            className="form-control"
                            value={formData.id}
                            onChange={handleChange}
                        />
                        {errors.id && <div className="text-danger">{errors.id}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >PAN card number</label>
                        <input
                            type="text"
                            name="pan_card"
                            className="form-control"
                            value={formData.pan_card}
                            onChange={handleChange}
                        />
                        {errors.pan_card && <div className="text-danger">{errors.pan_card}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Aadhar card number</label>
                        <input
                            type="text"
                            name="aadhar_card"
                            className="form-control"
                            value={formData.aadhar_card}
                            onChange={handleChange}
                        />
                        {errors.aadhar_card && <div className="text-danger">{errors.aadhar_card}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Bank name</label>
                        <input
                            type="text"
                            name="bank_name"
                            className="form-control"
                            value={formData.bank_name}
                            onChange={handleChange}
                        />
                        {errors.bank_name && <div className="text-danger">{errors.bank_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Branch name</label>
                        <input
                            type="text"
                            name="branch_name"
                            className="form-control"
                            value={formData.branch_name}
                            onChange={handleChange}
                        />
                        {errors.branch_name && <div className="text-danger">{errors.branch_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >IFSC code</label>
                        <input
                            type="text"
                            name="ifsc_code"
                            className="form-control"
                            value={formData.ifsc_code}
                            onChange={handleChange}
                        />
                        {errors.ifsc_code && <div className="text-danger">{errors.ifsc_code}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >CTC</label>
                        <input
                            type="text"
                            name="ctc_breakup"
                            className="form-control"
                            value={formData.ctc_breakup}
                            onChange={handleChange}
                        />
                        {errors.ctc_breakup && <div className="text-danger">{errors.ctc_breakup}</div>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeeFinanceDetails;
