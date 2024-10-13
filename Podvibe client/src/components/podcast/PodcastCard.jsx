import React from 'react'
import { useContext } from 'react';
import PlayBtn from '../playbtn/PlayBtn'
import { PlayerContext } from '../../../src/context/PlayerContext';


const PodcastCard = ({image, name, desc, id}) => {

    const {playWithId} = useContext(PlayerContext);

    return (
        <div onClick={()=>playWithId(id)} className='w-full p-3  rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'>
            <div className="w-full h-auto relative">
                <img src={image} alt="" className="w-full aspect-square object-cover object-center rounded-md" />
                {/* Hover Image */}
                <PlayBtn />
            </div>
            <div className="space-y-1">
                <h5 className="text-base font-medium text-neutral-100">
                    {name}
                </h5>
                <div className='flex items-center gap-x-2 flex-wrap text-sm text-neutral-400 line-clamp-1'>
                    <p className="text-sm text-neutral-400">
                        {desc.slice(0, 40)}                    
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default PodcastCard