import React, { useState, useEffect } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import your sidebar component

const Navbar = ({ className }) => {
    const [user, setUser] = useState(null); // Track logged-in user
    const [showSidebar, setShowSidebar] = useState(false); // State for showing the sidebar
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in from localStorage
        const authUser = JSON.parse(localStorage.getItem("auth"));
        if (authUser) {
            setUser(authUser);
        }
    }, []);

    const handleBack = () => {
        window.history.back();
    };

    const handleNext = () => {
        window.history.forward();
    };

    const goToAuth = (isSignUp) => {
        navigate('/auth', { state: { isSignUp } });
    };

    const handleCircleClick = () => {
        setShowSidebar((prev) => !prev); // Toggle the sidebar visibility
    };

    const getUserInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <div className={`w-full ${className} flex items-center justify-between md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}>
            {/* Arrow buttons */}
            <div className="flex items-center gap-x-2">
                <button onClick={handleBack} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronLeft className='w-7 h-7 mr-0.5' />
                </button>
                <button onClick={handleNext} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronRight className='w-7 h-7 mr-0.5' />
                </button>
            </div>

            {/* Conditional Rendering for Log In / Sign Up or User Circle */}
            <div className="flex items-center gap-x-5">
                {!user ? (
                    <>
                        <button 
                            className="w-fit text-neutral-400 text-sm font-semibold hover:scale-105 ease-in-out duration-100"
                            onClick={() => goToAuth(true)} // Go to Sign Up
                        >
                            Sign Up
                        </button>
                        <button 
                            className="w-fit px-8 h-12 rounded-full bg-neutral-50 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100"
                            onClick={() => goToAuth(false)} // Go to Log In
                        >
                            Log In
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={handleCircleClick}
                        className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ backgroundColor: '#FF5733' }} // Use the generated color
                    >
                        {getUserInitial(user.name)} {/* Display the first letter of the username */}
                    </button>
                )}
            </div>

            {/* Sidebar component */}
            {showSidebar && <Sidebar onClose={handleCircleClick} />}
        </div>
    );
};



export default Navbar;
