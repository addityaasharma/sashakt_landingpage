import React from "react";

const PersonaPage = () => {
    const personas = [
        {
            name: "Aditya Sharma",
            role: "Frontend Developer",
            description:
                "A creative React developer passionate about building user-friendly interfaces and modern web apps.",
            goals: ["Build clean UI", "Learn system design", "Contribute to open source"],
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Priya Verma",
            role: "UX Designer",
            description:
                "Focused on creating seamless user experiences with strong attention to detail and accessibility.",
            goals: ["Design intuitive workflows", "Promote accessibility", "Collaborate with developers"],
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-4xl font-bold text-center mb-10">Persona Profiles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {personas.map((persona, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <img
                            src={persona.image}
                            alt={persona.name}
                            className="w-32 h-32 rounded-full mb-4 border-4 border-indigo-500"
                        />
                        <h2 className="text-2xl font-semibold">{persona.name}</h2>
                        <p className="text-indigo-600 font-medium">{persona.role}</p>
                        <p className="mt-3 text-gray-600">{persona.description}</p>
                        <ul className="mt-4 text-left list-disc list-inside text-gray-700">
                            {persona.goals.map((goal, i) => (
                                <li key={i}>{goal}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonaPage;
