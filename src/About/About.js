import React from 'react'
import '../About/About.css'
export const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>

            <div className="about-cards">
                {/* Purpose Card */}
                <div className="about-card">
                    <h2>Purpose</h2>
                    <p>
                        This admin panel allows you to manage the Mini Amazon store efficiently.
                        Track products, update inventory, manage orders, and analyze revenue all in one place.
                    </p>
                </div>

                {/* Features Card */}
                <div className="about-card">
                    <h2>Features</h2>
                    <ul>
                        <li>View, add, update, and delete products</li>
                        <li>Track customer orders in real-time</li>
                        <li>Monitor total revenue and sales analytics</li>
                        <li>Manage categories and discounts</li>
                        <li>Responsive design for desktop and tablet</li>
                    </ul>
                </div>

                {/* Developer Info Card */}
                <div className="about-card">
                    <h2>Developer</h2>
                    <p>
                        Developed by <strong>J Praveen</strong>.
                        Built with <strong>React, Node.js, Express, and MongoDB</strong>.
                        Designed for educational and demonstration purposes.
                    </p>
                </div>

                {/* Contact Info Card */}
                <div className="about-card">
                    <h2>Contact</h2>
                    <p>Email: <a href="mailto:praveen@example.com">praveen@example.com</a></p>
                    <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">github.com/yourgithub</a></p>
                    <p>Website: <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">yourwebsite.com</a></p>
                </div>
            </div>
        </div>

    )
}
