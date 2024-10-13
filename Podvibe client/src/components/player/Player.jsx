import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { BsFilePlay } from 'react-icons/bs';
import { TbMicrophone2 } from 'react-icons/tb';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { PiDevicesBold } from 'react-icons/pi';
import { CgMiniPlayer, CgVolume } from 'react-icons/cg';
import { FiMaximize2 } from 'react-icons/fi';
import Playing from './playing/Playing';

const Player = () => {

    const { track } = useContext(PlayerContext);
    const [volume, setVolume] = useState(0.5);
    const handleVolume = (e) => {
        const volumeBar = e.currentTarget;
        const newVolume = e.nativeEvent.offsetX / volumeBar.offsetWidth;
        setVolume(newVolume);
    };
    return track ? (
        <div className='w-full  grid md:grid-cols-4 grid-cold-2 absolute left-0 bottom-0 rounded-md px-2'>
            {/* Artist Img,song name */}
            <div className='col-span-1 md:flex hidden items-center gap-x-3.5'>
                <img className='w-14 h-14 rounded-lg object-cover object-center p-0.5' src={track.image} alt={track.name} />
                <div className='space-y-0.5'>
                    <h6 className="text-sm text-neutral-200 font-semibold">{track.name}</h6>
                    <p className="text-xs text-neutral-400 font-normal">{track.performer.slice(0, 12)}</p>
                </div>
            </div>

            {/* player control */}
            <Playing />

            {/* Volume control and more */}
            <div className="w-full col-span-1 md:flex hidden items-center justify-end gap-x-3">
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <BsFilePlay className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <TbMicrophone2 className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <HiOutlineQueueList className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <PiDevicesBold className='w-5 h-5' />
                </button>
                <button className="w-[30%] flex items-center gap-x-2 text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <CgVolume className='w-5 h-5' />
                <div className="flex-1 h-1 bg-neutral-700/60 rounded-full" onClick={handleVolume}>
                    <div
                    className="h-1 bg-green-600 ease-in-out duration-100 rounded-full"
                    style={{ width: `${volume * 100}%` }}
                    ></div>
                </div>
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <CgMiniPlayer className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <FiMaximize2 className='w-5 h-5' />
                </button>
            </div>
        </div>
    ) : null;
};

export default Player;