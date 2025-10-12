import React from 'react'
import '../Contact/Contact.css'
export const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact</h1>

            <div className="contact-content">
                {/* Left: Contact Info */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions or feedback about the Mini Amazon Admin Panel, feel free to reach out.</p>

                    <div className="info-item">
                        <strong>Email:</strong> <a href="mailto:praveen@example.com">praveen@example.com</a>
                    </div>
                    <div className="info-item">
                        <strong>GitHub:</strong> <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">github.com/yourgithub</a>
                    </div>
                    <div className="info-item">
                        <strong>Website:</strong> <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">yourwebsite.com</a>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="contact-form">
                    <h2>Send a Message</h2>
                    <label>
                        Name:
                        <input type="text" placeholder="Enter your name" />
                    </label>

                    <label>
                        Email:
                        <input type="email" placeholder="Enter your email" />
                    </label>

                    <label>
                        Message:
                        <textarea rows="5" placeholder="Write your message"></textarea>
                    </label>

                    <button>Send Message</button>
                </div>
            </div>
        </div>

    )
}
