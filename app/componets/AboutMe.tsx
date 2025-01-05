import React from 'react';
import Image from 'next/image';
import myPhoto from '@/public/images/myPhoto.avif'

const AboutMe = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
            <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="mb-6 md:mb-0 md:w-1/3 md:mr-8 flex justify-center">
                    <Image
                        src={myPhoto}
                        alt="My Photo"
                        width={400}
                        height={400}
                        className="rounded-3xl"
                    />
                </div>
                <div className="md:w-2/3 text-center md:text-left bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-xl font-semibold text-gray-800 mb-6">
                        I am a full-stack software developer proficient in Python, Java, and JavaScript.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-start">
                            <div className="text-blue-600 text-2xl mr-4">💻</div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-lg">Full-stack Development</h3>
                                <p className="text-gray-700">Designing and implementing end-to-end web applications.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-600 text-2xl mr-4">🗄️</div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-lg">Database Management</h3>
                                <p className="text-gray-700">Optimizing performance and ensuring data integrity.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-600 text-2xl mr-4">📊</div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-lg">Data Analysis</h3>
                                <p className="text-gray-700">Utilizing Python with Pandas and Matplotlib for insights.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-600 text-2xl mr-4">🔄</div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-lg">Agile Methodologies</h3>
                                <p className="text-gray-700">Expertise in Scrum and Waterfall frameworks.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-600 text-2xl mr-4">🖥️</div>
                            <div>
                                <h3 className="font-medium text-gray-900 text-lg">GUI Development</h3>
                                <p className="text-gray-700">Building user-friendly interfaces with Java Swing.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-gray-800">
                        I have a proven track record of delivering impactful projects, such as a
                        data analysis tool that reduced processing time by 40%. With strong problem-solving skills
                        and a passion for collaboration, I am eager to contribute to innovative projects in the tech industry.
                    </p>
                </div>



            </div>
        </div>
    );

};

export default AboutMe;