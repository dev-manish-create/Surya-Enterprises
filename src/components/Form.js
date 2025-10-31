import { useState } from "react";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./Form.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
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
        try {
            const response = await fetch("http://localhost:5000/api/contacts/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", message: "" });
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
        <div className="form-wrapper">
            <div className="form-card">
                <h2 className="form-title">Get in Touch</h2>
                <p className="form-subtitle">
                    We'd love to hear from you! Please fill out the form or reach us directly below.
                </p>

                {isSubmitted ? (
                    <p className="success-message">
                        ✅ Thank you for reaching out! We’ll get back to you shortly.
                    </p>
                ) : (
                    <form className="modern-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group floating-label">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Name</label>
                            </div>

                            <div className="form-group floating-label">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Email</label>
                            </div>

                            <div className="form-group floating-label">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Contact Number</label>
                            </div>

                            <div className="form-group floating-label full-width">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder=" "
                                ></textarea>
                                <label>Message</label>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                )}

                {error && <p className="error-message">⚠️ {error}</p>}

                {/* Contact Info Section */}
                <div className="contact-info">
                    <h3>Other Ways to Reach Us</h3>
                    <div className="contact-icons">
                        <a href="tel:+919220489443" className="contact-item">
                            <FaPhoneAlt /> Call Us
                        </a>
                        <a
                            href="https://wa.me/919220489443"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="suryaenterprises108@gmail.com" className="contact-item">
                            <FaEnvelope /> Email
                        </a>
                        <a
                            href="https://www.instagram.com/suryaenterprises_108?igsh=M200OHQyMGpzYjBv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <FaInstagram /> Instagram
                        </a>
                        <div className="contact-item">
                            <a style={{textDecoration:"none",color:"white"}}
                                href="https://maps.app.goo.gl/FozkQ5HuoHbnSVvA9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                16/212, Trilok puri,Main Vasundra Raod, New Delhi-110091, India
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
