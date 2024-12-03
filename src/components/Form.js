import React, { useState } from "react";
import "./Form.css";

const Form = () => {
   const formapi = process.env.REACT_APP_FORM_API;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const apiUrl = "https://sheetdb.io/api/v1/azdxbbyp48vvx"; // Replace with your SheetsDB API URL

        try {
            const response = await fetch(`${formapi}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        Name: formData.name,
                        Email: formData.email,
                        "Contact Number": formData.contact,
                        Message: formData.message,
                    },
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", contact: "", message: "" });
            } else {
                const errorData = await response.text();
                console.error("Failed:", errorData);
                throw new Error("Failed to submit data.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="contact-form-container">
            <h2>We're Here to Help!</h2>
            <p className="form-subheading">
                Need assistance? Contact us using the form below or give us a call.<br/>
               Please Fill this form and we will get back to you as soon as possible.
            </p>

            {isSubmitted ? (
                <p className="success-message">
                    Thanks for contacting us. We will reach out to you as soon as
                    possible!
                </p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}

            {error && <p className="error-message">Error: {error}</p>}
        </div>
    );
};

export default Form;
