import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AudioCard = ({ image, name, desc, id, duration, onPlay }) => {
    return (
        <div className='w-full grid md:grid-cols-4 grid-cols-3 gap-4 items-center rounded-md px-6 py-2 group hover:bg-neutral-600/40 ease-in-out duration-100'>
            
            <div className="col-span-2 flex items-center gap-x-2">
                {/* Counter and Play Button */}
                <p className="text-neutral-300 text-sm font-medium pt-1">
                    <span className="group-hover:hidden block w-5 h-5">
                        {id}
                    </span>
                    <span className="group-hover:block hidden w-5 h-5 cursor-pointer" onClick={onPlay}>
                        <FaPlay />
                    </span>
                </p>

                {/* Song Image and Name */}
                <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-md object-center object-cover cursor-pointer"
                onClick={onPlay}  // Trigger play when clicking the image
                />

                <Link
                    className="text-sm text-neutral-100 font-medium hover:underline ml-1 ease-in-out duration-100">
                    {name}
                </Link>
            </div>

            {/* Views and Duration */}
            <div className="col-span-1 md:flex hidden items-center justify-center">
                <p className="text-sm text-neutral-400 font-medium group-hover:text-neutral-200 ease-in-out duration-100">
                    {desc}
                </p>

            </div>

            {/* Favorite and Ellipsis Icons */}
            <div className="col-span-1 md:flex hidden items-center justify-end gap-x-3">
                <MdFavoriteBorder className='group-hover:block hidden text-xl text-neutral-400' />
                <p className="text-base text-neutral-400 font-normal">
                    {duration}
                </p>
                <HiEllipsisHorizontal className='group-hover:block hidden text-2xl text-neutral-400' />
            </div>

            {/* Ellipsis Icon for mobile */}
            <div className="col-span-1 md:hidden flex items-center justify-end">
                <HiEllipsisHorizontal className='group-hover:block hidden text-2xl text-neutral-400' />
            </div>
        </div>
    );
};

export default AudioCard;
