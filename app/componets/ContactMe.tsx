'use client'
import React, { useState } from "react";


import { init, send } from "@emailjs/browser"

const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const serviceId = 'service_1rhbtsq'; // Replace with your EmailJS service ID
    const templateId = 'template_xglhjub'; // Replace with your EmailJS template ID
    const publicKey = 'XSbqFfz3SEZRPXgnd'; // Replace with your EmailJS public key


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Type assertion to ensure e.target is treated as an HTMLFormElement
        const form = e.target as HTMLFormElement;

        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        // Initialize EmailJS
        init(publicKey);  // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

        try {
            const response = await send(serviceId, templateId, {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                alert("Your message has been sent!");
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("An error occurred. Please try again.");
        }
    };




    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Contact Me</h2>

            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Contact Form */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Get in Touch</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}  // Ensure this is a number, not a string
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your message"
                                required
                            ></textarea>

                        </div>
                        <button
                            type="submit"

                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">Contact Details</h3>
                        <p className="text-gray-600 mb-2">Phone: <span className="font-medium">+254115391213 / +254769029838</span></p>
                        <p className="text-gray-600 mb-2">Email: <span className="font-medium">stevensaidimu@gmail.com</span></p>
                        <p className="text-gray-600">GitHub: <a href="https://github.com/Saidimu-Stephen" target="_blank" className="text-blue-600 underline">github.com/Saidimu-Stephen</a></p>
                    </div>

                    {/* Social Media Links */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">Connect with Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/your-profile"
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 transition text-2xl"
                            >
                                <i className="fab fa-linkedin"></i> {/* LinkedIn */}
                            </a>
                            <a
                                href="https://twitter.com/your-profile"
                                target="_blank"
                                className="text-gray-500 hover:text-blue-400 transition text-2xl"
                            >
                                <i className="fab fa-twitter"></i> {/* Twitter */}
                            </a>
                            <a
                                href="https://github.com/Saidimu-Stephen"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 transition text-2xl"
                            >
                                <i className="fab fa-github"></i> {/* GitHub */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
