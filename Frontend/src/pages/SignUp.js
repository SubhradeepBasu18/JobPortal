import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { signup } from "../ConfigAPI";

const SignUp = ({ isDarkMode }) => {
    const [userType, setUserType] = useState("jobseeker");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        company: "",
        resume: null,
        profilePic: null,
    });
    const [profilePicPreview, setProfilePicPreview] = useState(null);
    const [passwordError, setPasswordError] = useState("");
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "password") {
            validatePassword(value);
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        setFormData((prev) => ({
            ...prev,
            [name]: file,
        }));

        if (name === "profilePic" && file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePicPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const validatePassword = (password) => {
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordError(
            regex.test(password)
                ? ""
                : "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
        );
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (passwordError) {
            alert("Please fix the password error before submitting.");
            return;
        }

        signup(formData, userType);
        setShowSuccessDialog(true);
    };

    const handleSuccessDialogClose = () => {
        setShowSuccessDialog(false);
    };

    const togglePasswordVisibility = (type) => {
        if (type === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
            }`}
        >
            <div className="max-w-lg w-full space-y-8">
                <h2
                    className={`text-center text-3xl font-extrabold ${
                        isDarkMode ? "text-blue-500" : "text-blue-600"
                    }`}
                >
                    Create Your Account
                </h2>

                <form className="space-y-6" onSubmit={handleSignUp}>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Select User Type
                        </label>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                onClick={() => setUserType("jobseeker")}
                                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                    userType === "jobseeker"
                                        ? isDarkMode
                                            ? "bg-blue-600 text-white"
                                            : "bg-blue-500 text-white"
                                        : isDarkMode
                                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                Jobseeker
                            </button>
                            <button
                                type="button"
                                onClick={() => setUserType("employer")}
                                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                    userType === "employer"
                                        ? isDarkMode
                                            ? "bg-green-600 text-white"
                                            : "bg-green-500 text-white"
                                        : isDarkMode
                                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                Employer
                            </button>
                        </div>
                    </div>

                    <label className="block text-sm font-medium mb-1">
                        Upload Profile Picture
                    </label>
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <img
                                src={
                                    profilePicPreview ||
                                    "https://via.placeholder.com/100?text=Profile+Pic"
                                }
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                            />
                            <input
                                type="file"
                                name="profilePic"
                                onChange={handleFileChange}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className={`block w-full px-3 py-2 rounded-md border transition-colors ${
                            isDarkMode
                                ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
                                : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`block w-full px-3 py-2 rounded-md border transition-colors ${
                            isDarkMode
                                ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
                                : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`block w-full px-3 py-2 rounded-md border transition-colors ${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
                                    : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('password')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? (
                                <EyeOff 
                                    className={`h-5 w-5 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} 
                                />
                            ) : (
                                <Eye 
                                    className={`h-5 w-5 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} 
                                />
                            )}
                        </button>
                    </div>
                    {passwordError && (
                        <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                    )}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className={`block w-full px-3 py-2 rounded-md border transition-colors ${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
                                    : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirmPassword')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showConfirmPassword ? (
                                <EyeOff 
                                    className={`h-5 w-5 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} 
                                />
                            ) : (
                                <Eye 
                                    className={`h-5 w-5 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} 
                                />
                            )}
                        </button>
                    </div>

                    {userType === "jobseeker" && (
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Upload Your Resume
                            </label>
                            <input
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="block w-full px-3 py-2 rounded-md border"
                            />
                        </div>
                    )}
                    {userType === "employer" && (
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className={`block w-full px-3 py-2 rounded-md border transition-colors ${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-400 focus:border-blue-400"
                                    : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        />
                    )}

                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-md font-medium text-white ${
                            isDarkMode
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center">
                    <p>
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            className={`font-medium ${
                                isDarkMode
                                    ? "text-blue-400 hover:text-blue-500"
                                    : "text-blue-600 hover:text-blue-700"
                            }`}
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                {showSuccessDialog && (
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
                    >
                        <div
                            className={`bg-white p-6 rounded-lg text-center ${
                                isDarkMode ? "text-gray-200 bg-gray-800" : ""
                            }`}
                        >
                            <h3 className="text-lg font-bold">Sign Up Successful!</h3>
                            <p>Welcome to the platform, {formData.fullName}!</p>
                            <button
                                className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                onClick={handleSuccessDialogClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;