import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby7WknHXXNpigtrEhUN0d3EV8KvxE2j9ixZbnLU2IINY9Y6ajmzqyZhM_65SukWVYtf1Q/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(form),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = await response.json();
            console.log("Google Sheet Response:", result);

            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error!", error);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4"
                >
                    {submitted && (
                        <p className="text-green-600 font-semibold text-center">
                            Your message has been sent!
                        </p>
                    )}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Info Section */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Email</h2>
                        <p className="text-gray-600">admin@scholarlyy.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Phone</h2>
                        <p className="text-gray-600">+91 9876543210</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Address</h2>
                        <p className="text-gray-600">
                            123, Tech Park, Mumbai, India
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
                        <p className="text-gray-400">Map placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
