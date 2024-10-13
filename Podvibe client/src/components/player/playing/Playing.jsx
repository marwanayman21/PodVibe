import React, { useContext } from 'react';
import { PiRepeat, PiShuffleBold } from 'react-icons/pi';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';
import { PlayerContext } from '../../../context/PlayerContext';

const Playing = () => {
    const {  seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  return (
    <div className='col-span-2 flex items-center justify-center flex-col space-y-2'>
                <div className='w-full flex items-center justify-center flex-col space-y-2'>
                    <div className="flex items-center justify-center gap-x-5">
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <PiShuffleBold className='w-5 h-5' />
                        </button>
                        <button onClick={previous} className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <GiPreviousButton className='w-5 h-5' />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-900 flex items-center justify-center">
                        {playStatus ? (
                            <IoPauseSharp onClick={pause} className='w-5 h-5' />
                        ) : 
                        (
                        <IoPlaySharp onClick={play} className='w-5 h-5' />
                        )}                        
                        </button>
                        <button onClick={next} className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <GiNextButton className='w-5 h-5' />
                        </button>
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <PiRepeat className='w-5 h-5' />
                        </button>
                    </div>
                    <div className='md:w-3/4 w-full flex items-center justify-center gap-x-3'>
                        <p className="text-xe text-neutral-400 font-medium">{time.currentTime.minute}:{time.currentTime.second < 10 ? `0${time.currentTime.second}` : time.currentTime.second}</p>
                        <div ref={seekBg} onClick={seekSong} className='flex-1 h-1 bg-neutral-700/60 rounded-full relative cursor-pointer'>
                            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-600 rounded-full' />
                        </div>
                        <p className="text-xe text-neutral-400 font-medium">{time.totalTime.minute}:{time.totalTime.second < 10 ? `0${time.totalTime.second}` : time.totalTime.second}</p>
                    </div>                    
                </div>
    </div>
  )
}

export default Playing