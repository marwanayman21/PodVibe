import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdVerified } from 'react-icons/md'
import { PlayerContext } from '../../../../context/PlayerContext';

const ArtistInfo = () => {
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
  return  albumData ?(
    <div className='w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4'>
        <img src={albumData.image} alt="" className="w-52 aspect-square rounded-full object-center object-cover shadow-xl" />

        <div className="space-y-3">
            <div className="md:flex hidden items-center gap-x-2">
                <MdVerified className='w-7 h-7 text-blue-500' />
                <p className="text-sm text-neutral-100">
                    Verified
                </p>
            </div>
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-black text-neutral-50">
            {albumData.name}
            </h1>
            <p className="text-base text-neutral-100">
                    40,300,400 monthly listeners
            </p>
        </div>
    </div>
  ): null;
}

export default ArtistInfo