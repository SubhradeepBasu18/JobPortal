import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Search, MapPin, Briefcase, Users, TrendingUp, Building } from 'lucide-react';
import { Link } from 'react-router-dom';


const FindJobs = ({ isDarkMode }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isDarkMode]);


  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for jobs:', { jobTitle, location });
  };

  const features = [
    {
      icon: <Briefcase className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Thousands of Jobs',
      description: 'Access thousands of job listings from top companies across industries.',
    },
    {
      icon: <Users className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Expert Network',
      description: 'Connect with industry professionals and grow your network.',
    },
    {
      icon: <TrendingUp className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: 'Career Growth',
      description: 'Get insights and resources to advance your career.',
    },
  ];

  const testimonials = [
    {
      feedback: "JobConnect has been an amazing platform to find the best job opportunities!",
      name: "Arjun Sharma",
      job: "Software Engineer",
    },
    {
      feedback: "I found my dream job through JobConnect. Highly recommend it!",
      name: "Priya Patel",
      job: "Data Scientist",
    },
    {
      feedback: "JobConnect made my job search so much easier! A great platform to connect with employers.",
      name: "Ravi Kumar",
      job: "Mechanical Engineer",
    },
    {
      feedback: "Thanks to JobConnect, I was able to land an amazing job in just a few weeks!",
      name: "Anjali Reddy",
      job: "Digital Marketer",
    },
    {
      feedback: "The platform is easy to use and helped me find a job that fits my skills perfectly.",
      name: "Vikram Singh",
      job: "Web Developer",
    },
  ];
  

  const categories = ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Education', 'Design'];

  return (
    <div
      className={`container mx-auto px-4 py-12 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'}`}
    >
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1
          className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-indigo-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-indigo-800'}`}
        >
          Find Your Dream Job
        </h1>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Discover exciting job opportunities across various industries and locations.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className={`max-w-3xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden flex mb-12 flex-col md:flex-row`}
        data-aos="fade-up"
      >
        <div className="flex-1 flex items-center border border-gray-300 rounded-l-lg mb-4 md:mb-0 md:mr-2">
          <Search className={`ml-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <input
            type="text"
            placeholder="Job Title, Keywords"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={`w-full p-4 focus:outline-none rounded-l-lg ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'}`}
          />
        </div>
        <div className="flex-1 flex items-center border border-gray-300 mb-4 md:mb-0 md:mr-2">
          <MapPin className={`ml-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <input
            type="text"
            placeholder="City, State, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={`w-full p-4 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'}`}
          />
        </div>
        <button
          type="submit"
          className={`px-6 py-3 rounded-r-lg ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} hover:bg-blue-700 transition-transform transform hover:scale-105 hover:shadow-md`}
        >
          Search Jobs
        </button>
      </form>

      {/* Why Choose Us Section */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-center text-3xl font-bold mb-8">Why Choose JobConnect?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 text-center ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:border-blue-400 hover:shadow-blue-900/50' : 'bg-white text-gray-900 border-gray-300 hover:bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-blue-100 hover:border-blue-500 hover:shadow-blue-200/70'} border rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-center text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'} shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:${isDarkMode ? 'bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900' : 'bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-blue-100'}`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

     {/* Featured Companies Section */}
    <div className="mb-16" data-aos="fade-up">
      <h2 className="text-center text-3xl font-bold mb-8">Top Companies Hiring</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          "Tata Consultancy Services",
          "Infosys",
          "Wipro",
          "HCL Technologies",
          "Accenture",
          "Cognizant",
          "Amazon",
          "Google",
        ].map((company, index) => (
          <div
            key={index}
            className={`p-4 text-center ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:border-blue-400 hover:shadow-blue-900/50' : 'bg-white text-gray-900 border-gray-300 hover:bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-blue-100 hover:border-blue-500 hover:shadow-blue-200/70'} border rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform`}
          >
            <Building className="text-4xl mb-4 text-blue-600" />
            <p className="text-lg font-semibold">{company}</p>
          </div>
        ))}
      </div>
    </div>



    {/* Testimonials Section */}
    <div className="mb-16" data-aos="fade-up">
      <h2 className="text-center text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:border-blue-400 hover:shadow-blue-900/50' : 'bg-white text-gray-900 border-gray-300 hover:bg-gradient-to-r hover:from-white hover:via-blue-50 hover:to-blue-100 hover:border-blue-500 hover:shadow-blue-200/70'} shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105  w-full sm:w-96`}
          >
            <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.job}</p>
          </div>
        ))}
      </div>
    </div>


      {/* Call to Action Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
        <p className="mb-6 text-lg">
          Join JobConnect today and start your journey toward an amazing career.
        </p>
        <Link
          to="/signup"
          className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default FindJobs;
