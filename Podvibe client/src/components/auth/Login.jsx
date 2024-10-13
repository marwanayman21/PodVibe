// src/components/Login.jsx
import React from 'react';
import { FaGooglePlusG, FaFacebookF, FaTwitter, FaMicrosoft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form className="flex flex-col p-6">
            <h1 className="text-center text-2xl text-white mb-4">Sign In</h1>
            <div className="flex justify-center mb-4">
                <ul className="flex items-center gap-x-6">
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign in with Google">
                            <FaGooglePlusG size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign in with Facebook">
                            <FaFacebookF size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign in with Twitter">
                            <FaTwitter size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link  className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100' title="Sign in with Microsoft">
                            <FaMicrosoft size={24} />
                        </Link>
                    </li>
                </ul>
            </div>
            <input type="email" placeholder="Email" className="mb-2 p-2 rounded" />
            <input type="password" placeholder="Password" className="mb-2 p-2 rounded" />
            <a href="#" className="text-purple-400 text-sm text-right mb-2">Forget Your Password?</a>
            <button type="submit" className="bg-purple-800 p-2 rounded text-white">Sign In</button>
        </form>
    );
};

export default Login;
