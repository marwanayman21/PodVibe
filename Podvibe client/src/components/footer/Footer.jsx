import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full md:py-16 sm:py-14 py-10 md:px-6 sm:px-5 px-4 space-y-10'>
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 items-start gap-7">
            <div className='col-span-1 space-y-3'>
                <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">Company</h6>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>About</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Jobs</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>For the Record</Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-1 space-y-3'>
            <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">Communities</h6>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Developers</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>For Artists</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Advertising</Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-1 space-y-3'>
            <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">Useful links</h6>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Support</Link>
                    </li>   
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Free Mobile App</Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-1 space-y-3'>
            <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">Spotify Plans</h6>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Premium Individual</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Premium Duo</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-neutral-50 hover:underline ease-in-out duration-75'>Premium Family</Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-2 space-y-3 flex md:items-end items-center md:justify-end justify-center'>
                <ul className="flex items-center gap-x-6">
                    <li>
                        <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100'>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100'>
                            <FaFacebook />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-700/40"></div>
        <p className="text-smtext-neutral-400 font-normal">
            &copy; 2024 PODVIBE 
        </p>
    </div>
  )
}

export default Footer