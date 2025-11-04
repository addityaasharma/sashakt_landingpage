import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
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
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error!", error);
    }
  };

  return (
    <div
      className={`min-h-screen py-12 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-lg hover:scale-110 transform transition"
          aria-label="Toggle Dark Mode"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6 mt-20">Contact Us</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        We'd love to hear from you! Fill out the form below and we'll get back to
        you as soon as possible.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4 transition-colors"
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
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-200 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-200 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-200 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col gap-6 text-gray-800 dark:text-gray-300 transition-colors">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p>admin@googlyy.com</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Phone</h2>
            <p>+91 9575584999</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Address</h2>
            <p>
              Chhattisgarh, Raipur, New Rajendra Nagar, Golden Trade Center - 521
              Sashakt Enterprises
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
