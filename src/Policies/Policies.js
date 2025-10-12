import React from 'react'
import '../Policies/Policies.css'
export const Policies = () => {
    return (
        <div className="policies-container">
            <h1 className="policies-heading">Policies</h1>

            <div className="policies-cards">
                {/* Privacy Policy */}
                <div className="policy-card">
                    <h2>Privacy Policy</h2>
                    <p>
                        We respect your privacy. All customer data is securely stored and never shared without consent.
                    </p>
                </div>

                {/* Return Policy */}
                <div className="policy-card">
                    <h2>Return Policy</h2>
                    <p>
                        Customers can return items within 7 days of delivery. Refunds or replacements will be processed promptly.
                    </p>
                </div>

                {/* Shipping Policy */}
                <div className="policy-card">
                    <h2>Shipping Policy</h2>
                    <p>
                        Orders are processed within 24 hours. Standard shipping takes 3-5 business days.
                    </p>
                </div>

                {/* Terms & Conditions */}
                <div className="policy-card">
                    <h2>Terms & Conditions</h2>
                    <p>
                        Use of this platform is subject to our terms and conditions. By using the admin panel, you agree to follow them.
                    </p>
                </div>
            </div>
        </div>

    )
}
