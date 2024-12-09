import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title, description, company, location, salary, isDarkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 1000,
            easing: 'ease-in-out',
            once: true});
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [isDarkMode]);

    return (
        <div
            className={`border rounded-md shadow-md p-4 
                ${isDarkMode ? 
                    'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:border-blue-400 hover:shadow-blue-900/50' : 
                    'bg-white text-gray-900 border-gray-300 hover:bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-blue-100 hover:border-blue-500 hover:shadow-blue-200/70'} 
                transition-all duration-300 ease-in-out transform hover:scale-115 hover:shadow-2xl`}
            data-aos="fade-up"
        >

            <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">{title}</h2>

            <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>

            <div className="space-y-2">
                <div>
                    <p className="text-lg font-medium">Company:</p>
                    <p className="text-sm text-gray-800 dark:text-gray-400">{company}</p>
                </div>
                <div>
                    <p className="text-lg font-medium">Location:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{location}</p>
                </div>
                <div>
                    <p className="text-lg font-medium">Salary:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">${salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
