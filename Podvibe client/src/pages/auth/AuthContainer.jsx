// src/components/AuthContainer.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SignUp from '../../components/auth/SignUp';
import Login from '../../components/auth/Login';

const AuthContainer = () => {
    const location = useLocation();
    const { isSignUp } = location.state || { isSignUp: false };
    const [isSignUpState, setIsSignUp] = useState(isSignUp);

    const toggleForms = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
            <button
                id="toggleStyles"
                className="absolute top-4 right-4 text-2xl text-gray-300"
                title="Toggle Dark/Light Mode"
                onClick={() => {
                    // Implement dark/light mode toggle logic here
                }}
            >
                <i className="far fa-moon"></i>
            </button>
            <div className={`container max-w-md w-full bg-gray-700 rounded-lg shadow-lg p-6`}>
                {isSignUpState ? <SignUp /> : <Login />}
                <div className="toggle-container flex justify-between mt-4">
                    <button
                        id="login"
                        className={`w-full p-2 text-white rounded-lg ${isSignUpState ? 'bg-green-800' : 'bg-green-600'} transition duration-300`}
                        onClick={toggleForms}
                    >
                        {isSignUpState ? 'Log In instead?' : 'Sign Up instead?'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;
