import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Import a close icon (optional)

const Sidebar = ({ onClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Clear user authentication data
        navigate('/auth'); // Navigate to login page
        onClose(); // Close the sidebar
    };

    return (
        <aside className="fixed top-[3.3rem] right-9 w-64 h-30 bg-gray-700 text-white shadow-lg rounded-xl">
            <div className="p-2 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={onClose} className="text-white hover:text-gray-400">
                    <FaTimes className="w-5 h-5" /> {/* Close icon */}
                </button>
            </div>
            <div className="p-4">
                <button 
                    onClick={handleLogout} 
                    className="mt-0 w-full text-left text-red-500 font-semibold hover:text-red-700"
                >
                    Log Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
