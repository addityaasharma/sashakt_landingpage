import React from "react";
import { Users, Globe, Award } from "lucide-react";

const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50 text-black px-6 md:px-20 lg:px-40 py-12">
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0">
                    <p className="text-xl md:text-2xl uppercase font-bold text-gray-700">
                        Who We Are -
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug mt-3">
                        Building Knowledge <br className="hidden md:block" /> Together
                    </h1>
                    <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0 text-sm md:text-base">
                        We are dedicated to empowering learners worldwide with high-quality
                        resources, collaboration, and guidance. Our mission is to make
                        education accessible, engaging, and effective for everyone.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
                    <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                        alt="About Us Hero"
                        className="max-h-[400px] w-auto object-contain rounded-xl shadow-lg"
                    />
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
                <div className="flex flex-col items-center bg-[#002147] text-white rounded-xl p-6 shadow-md">
                    <Users size={36} className="mb-3" />
                    <h2 className="text-2xl font-bold">10k+</h2>
                    <p className="text-center text-sm mt-1">Active Learners</p>
                </div>
                <div className="flex flex-col items-center bg-[#002147] text-white rounded-xl p-6 shadow-md">
                    <Globe size={36} className="mb-3" />
                    <h2 className="text-2xl font-bold">50+</h2>
                    <p className="text-center text-sm mt-1">Countries Reached</p>
                </div>
                <div className="flex flex-col items-center bg-[#002147] text-white rounded-xl p-6 shadow-md">
                    <Award size={36} className="mb-3" />
                    <h2 className="text-2xl font-bold">100+</h2>
                    <p className="text-center text-sm mt-1">Expert Contributors</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center gap-8 px-6">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
                        alt="Mission"
                        className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-base md:text-lg uppercase tracking-wide text-gray-500 font-semibold">
                        Our Mission -
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Educate. Inspire. Transform.
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                        We aim to provide innovative learning experiences that inspire
                        curiosity, foster critical thinking, and transform lives.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                        <li>High-quality, accessible educational resources.</li>
                        <li>Global collaboration and knowledge sharing.</li>
                        <li>Empowering learners with practical skills.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-12 px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="font-bold text-lg">Ravi Sharma</h3>
                        <p className="text-gray-600 text-sm">Founder & CEO</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="font-bold text-lg">Ananya Gupta</h3>
                        <p className="text-gray-600 text-sm">Chief Educator</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/56.jpg"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="font-bold text-lg">Karan Verma</h3>
                        <p className="text-gray-600 text-sm">Head of Research</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
