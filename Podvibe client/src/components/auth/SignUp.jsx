// src/components/SignUp.jsx
import React from 'react';
import { FaGooglePlusG, FaFacebookF, FaTwitter, FaMicrosoft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <form className="flex flex-col p-6">
            <h1 className="text-center text-2xl text-white mb-4">Create Account</h1>
            <div className="flex justify-center mb-4">
                <ul className="flex items-center gap-x-6">
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign up with Google">
                            <FaGooglePlusG size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign up with Facebook">
                            <FaFacebookF size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign up with Twitter">
                            <FaTwitter size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign up with Microsoft">
                            <FaMicrosoft size={24} />
                        </Link>
                    </li>
                </ul>
            </div>
            <input type="text" placeholder="Username" className="mb-2 p-2 rounded" />
            <input type="email" placeholder="Email" className="mb-2 p-2 rounded" />
            <input type="password" placeholder="Password" className="mb-2 p-2 rounded" />
            <input type="password" placeholder="Reconfirm Password" className="mb-2 p-2 rounded" />
            <button type="submit" className="bg-purple-800 p-2 rounded text-white">Sign Up</button>
        </form>
    );
};

export default SignUp;
