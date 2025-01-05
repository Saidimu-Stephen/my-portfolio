import React from 'react';
import { FaPython, FaJava, FaJsSquare, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Skills */}
                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                        <FaPython className="text-2xl text-blue-500" />
                        <h3 className="text-xl font-semibold text-gray-700">Programming Skills</h3>
                    </div>
                    <ul className="space-y-2">
                        <li><span className="font-semibold">Python (Proficient):</span> Data analysis with Pandas & Matplotlib</li>
                        <li><span className="font-semibold">Java (Experienced):</span> Application & system building, Swing GUI</li>
                        <li><span className="font-semibold">JavaScript (Skilled):</span> Interactive UIs, cross-browser compatibility</li>
                        <li><span className="font-semibold">C++ (Proficient):</span> Complex algorithms, market trend analysis</li>
                        <li><span className="font-semibold">PHP (Experience):</span> Backend development, e-commerce platform</li>
                    </ul>
                </div>

                {/* Development Tools & Methodologies */}
                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                        <FaTools className="text-2xl text-green-500" />
                        <h3 className="text-xl font-semibold text-gray-700">Development Tools & Methodologies</h3>
                    </div>
                    <ul className="space-y-2">
                        <li><span className="font-semibold">Database Management:</span> Indexing, query optimization</li>
                        <li><span className="font-semibold">Software Testing:</span> Ensuring application robustness & reliability</li>
                        <li><span className="font-semibold">Microsoft Packages:</span> Development & documentation</li>
                        <li><span className="font-semibold">Version Control:</span> Collaborative development</li>
                        <li><span className="font-semibold">Agile, Scrum, Waterfall:</span> Skilled in various methodologies</li>
                    </ul>
                </div>

                {/* Other Skills */}
                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                        <FaDatabase className="text-2xl text-purple-500" />
                        <h3 className="text-xl font-semibold text-gray-700">Other Skills</h3>
                    </div>
                    <ul className="space-y-2">
                        <li><span className="font-semibold">Problem-solving:</span> Optimizing algorithms, improving efficiency</li>
                        <li><span className="font-semibold">Communication:</span> Strong collaboration & interpersonal skills</li>
                        <li><span className="font-semibold">Leadership:</span> Project management, risk assessment, stakeholder management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
