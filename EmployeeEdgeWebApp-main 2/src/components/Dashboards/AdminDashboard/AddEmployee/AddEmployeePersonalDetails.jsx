import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeePersonalDetails = () => {
    const [formData, setFormData] = useState({
        empno: '',
        full_name: '',
        dob: '',
        gender: '',
        age: '',
        current_address: '',
        permanent_address: '',
        mob_no: '',
        personal_mail: '',
        emergency_contact_name: '',
        emergency_mobile_no: '',
        sameAddress: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            sameAddress: checked,
            permanent_address: checked ? prevState.current_address : ''
        }));
    };

    const validateForm = () => {
        let formErrors = {};
        
        if (!formData.empno || isNaN(formData.empno) || formData.empno.length > 4) {
            formErrors.empno = 'Employee number should be a number less than or equal to 4 digits';
        }

        if (!formData.full_name) {
            formErrors.full_name = 'Full name is required';
        }

        if (!formData.dob) {
            formErrors.dob = 'Date of birth is required';
        }

        if (!formData.gender) {
            formErrors.gender = 'Gender is required';
        }

        if (!formData.age || isNaN(formData.age) || formData.age > 80) {
            formErrors.age = 'Age should be a number less than 80';
        }

        if (!formData.current_address) {
            formErrors.current_address = 'Current address is required';
        }

        if (!formData.permanent_address) {
            formErrors.permanent_address = 'Permanent address is required';
        }

        if (!formData.mob_no || isNaN(formData.mob_no) || formData.mob_no.length !== 10) {
            formErrors.mob_no = 'Mobile number should be a 10-digit number';
        }

        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.personal_mail || !mailRegex.test(formData.personal_mail)) {
            formErrors.personal_mail = 'Valid personal mail is required';
        }

        if (!formData.emergency_contact_name) {
            formErrors.emergency_contact_name = 'Emergency contact name is required';
        }

        if (!formData.emergency_mobile_no || isNaN(formData.emergency_mobile_no) || formData.emergency_mobile_no.length !== 10) {
            formErrors.emergency_mobile_no = 'Emergency mobile number should be a 10-digit number';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await axios.post('http://localhost:9095/addEmployee', formData);
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
                            name="empno"
                            className="form-control"
                            value={formData.empno}
                            onChange={handleChange}
                        />
                        {errors.empno && <div className="text-danger">{errors.empno}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Full name</label>
                        <input
                            type="text"
                            name="full_name"
                            className="form-control"
                            value={formData.full_name}
                            onChange={handleChange}
                        />
                        {errors.full_name && <div className="text-danger">{errors.full_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Date of birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        {errors.dob && <div className="text-danger">{errors.dob}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Gender</label>
                        <select
                            name="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Age</label>
                        <input
                            type="number"
                            name="age"
                            className="form-control"
                            value={formData.age}
                            onChange={handleChange}
                        />
                        {errors.age && <div className="text-danger">{errors.age}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Current address</label>
                        <textarea
                            name="current_address"
                            className="form-control"
                            value={formData.current_address}
                            onChange={handleChange}
                        ></textarea>
                        {errors.current_address && <div className="text-danger">{errors.current_address}</div>}
                    </div>

                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="sameAddress"
                            checked={formData.sameAddress}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="sameAddress">
                            Permanent address is same as current address
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Permanent address</label>
                        <textarea
                            name="permanent_address"
                            className="form-control"
                            value={formData.permanent_address}
                            onChange={handleChange}
                        ></textarea>
                        {errors.permanent_address && <div className="text-danger">{errors.permanent_address}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Mobile number</label>
                        <input
                            type="text"
                            name="mob_no"
                            className="form-control"
                            value={formData.mob_no}
                            onChange={handleChange}
                        />
                        {errors.mob_no && <div className="text-danger">{errors.mob_no}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Personal mail</label>
                        <input
                            type="email"
                            name="personal_mail"
                            className="form-control"
                            value={formData.personal_mail}
                            onChange={handleChange}
                        />
                        {errors.personal_mail && <div className="text-danger">{errors.personal_mail}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Emergency contact name</label>
                        <input
                            type="text"
                            name="emergency_contact_name"
                            className="form-control"
                            value={formData.emergency_contact_name}
                            onChange={handleChange}
                        />
                        {errors.emergency_contact_name && <div className="text-danger">{errors.emergency_contact_name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" >Emergency mobile number</label>
                        <input
                            type="text"
                            name="emergency_mobile_no"
                            className="form-control"
                            value={formData.emergency_mobile_no}
                            onChange={handleChange}
                        />
                        {errors.emergency_mobile_no && <div className="text-danger">{errors.emergency_mobile_no}</div>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeePersonalDetails;
