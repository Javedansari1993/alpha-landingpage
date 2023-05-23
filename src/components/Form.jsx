import React, { useState } from "react";
import "./form.css"
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        company: "",
        state: "Uttarakhand",
        description: "Installer",
        preferredDistributor: "Aurotect",
        additionalInformation: "",
        agreeTerms: false,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: fieldValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation logic
        const isFormValid = validateForm();

        if (isFormValid) {
            // Perform form submission logic or API call here

            // Display success message
            setIsSubmitted(true);
            alert("Form submitted successfully!");
        }
    };

    const validateForm = () => {
        // Perform form validation here
        // You can add your own validation rules for each field

        const {
            firstName,
            lastName,
            email,
            contactNumber,
            company,
            additionalInformation,
            agreeTerms,
        } = formData;

        // Example validation rule: Check if required fields are filled
        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            email.trim() === "" ||
            contactNumber.trim() === "" ||
            company.trim() === "" ||
            additionalInformation.trim() === "" ||
            !agreeTerms
        ) {
            alert("Please fill in all required fields and agree to the terms");
            return false;
        }

        // Add more validation rules as needed

        return true; // Return true if the form is valid
    };

    return (
        <div className="container">
            <div style={{ width: 400, padding: 20 }}>
                {isSubmitted ? (
                    <div className="alert alert-success" role="alert">
                        Form submitted successfully!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h3>Connect with us</h3>
                        <h6>For outstanding projtective overlaminates</h6>
                        <div className="d-flex gap-2">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </div>
                        <div className="d-flex gap-2">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contactNumber"
                                className="form-label"
                            >
                                Contact Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </div>
                        <div className="d-flex gap-2">
                        <div className="mb-3">
                            <label htmlFor="company" className="form-label">
                                Company
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <select
                                id="state"
                                className="form-control"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                </option>
                            </select>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                How would you describe yourself?
                            </label>
                            <select
                                id="description"
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            >
                                <option value="Installer">Installer</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="preferredDistributor"
                                className="form-label"
                            >
                                Preferred Distributor
                            </label>
                            <select
                                id="preferredDistributor"
                                className="form-control"
                                name="preferredDistributor"
                                value={formData.preferredDistributor}
                                onChange={handleChange}
                                required
                            >
                                <option value="Aurotect">Aurotect</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="additionalInformation"
                                className="form-label"
                            >
                                Additional Information
                            </label>
                            <textarea
                                className="form-control"
                                id="additionalInformation"
                                name="additionalInformation"
                                value={formData.additionalInformation}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            <label
                                className="form-check-label"
                                htmlFor="agreeTerms"
                            >
                                I'd like to receive promotions productive information and service offers from Avery dennison
                            </label>
                        </div>{" "}
                        <button type="submit" className="d-flex justify-content-center">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
