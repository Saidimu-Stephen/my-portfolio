import React from 'react';

const projects = [
    {
        title: "Data Analysis Tool",
        description:
            "Developed a Python-based tool using Pandas and Matplotlib that reduced data processing time by 40%. Extracted meaningful insights for business decision-making.",
        technologies: ["Python", "Pandas", "Matplotlib"],
    },
    {
        title: "Inventory Management System",
        description:
            "Led the development of a Java-based system with real-time data synchronization and a user-friendly interface using Swing GUI.",
        technologies: ["Java", "Swing GUI", "Multi-threading"],
    },
    {
        title: "E-Commerce Backend Development",
        description:
            "Contributed to backend development for an e-commerce platform, focusing on database scalability and system reliability.",
        technologies: ["PHP", "MySQL", "Laravel"],
    },
    {
        title: "Market Trend Analysis",
        description:
            "Built a C++ tool to analyze market trends with optimized algorithms, improving data processing efficiency by 25%.",
        technologies: ["C++", "Algorithms", "Data Optimization"],
    },
];

const Projects = () => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
