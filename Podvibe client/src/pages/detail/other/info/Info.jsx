import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../../../../context/PlayerContext';
import { assets } from '../../../../assets/assets';

const Info = () => {
    const { id } = useParams();  // Getting album ID from the URL
    const [albumData, setAlbumData] = useState(null);
    const { albumsData } = useContext(PlayerContext);

    useEffect(() => {
        // Find the album by ID and set the album data
        const album = albumsData.find((item) => item._id === id);
        if (album) {
            setAlbumData(album);
        }
    }, [albumsData, id]);
  return   albumData ? (
    <div className='w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4'>
        <img src={albumData.image} alt="" className="md:w-52 w-full md:aspect-square aspect-video rounded-md object-cover object-center shadow-xl" />

        <div className="space-y-2">
            <p className="text-sm text-neutral-100">
                Album
            </p>
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-black text-neutral-50 tracking-tight mb-4">{albumData.name}</h1>
            <p className="text-sm text-neutral-300">
                with {albumData.desc}
            </p>
            <div className="flex items-center gap-x-2 flex-wrap gap-y-2">
                <div className="flex items-center gap-x-1.5">
                <img className='w-8 h-8' src={assets.PodVibe} alt="" />
                <p className="text-sm text-neutral-100 tracking-tight font-medium">
                        PodVibe
                    </p>
                </div>
                <div className="w-1 h-1 rounded-full bg-neutral-100"></div>
                <p className="text-sm text-neutral-100">
                    245.000 saves
                </p>
                <div className="w-1 h-1 rounded-full bg-neutral-100"></div>
                <p className="text-sm text-neutral-100">
                    50 songs ,{" "}  
                    <span className="text-neutral-500">
                        about 3 hr 30 min
                    </span> 
                </p>
                
            </div>
        </div>
    </div>
  ): null;
}

export default Info