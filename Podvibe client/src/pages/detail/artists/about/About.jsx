import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../../../../context/PlayerContext';

const About = () => {
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
  return albumData ?(
    <div className='w-full space-y-4 md:block hidden'>
        <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
            About
        </h1>
        <div className="w-10/12 h-80 bg-neutral-800/70 rounded-md shadow hover:scale-[1.01] relative p-6 flex justify-center flex-col space-y-7 ease-in-out duration-300">
            <img src={albumData.image} alt="" className="w-48 aspect-square rounded-full object-cover object-center" />
            <p className="text-base text-neutral-100">
                40,300,400 monthly listeners
            </p>
            <div className="absolute top-5 right-10 w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center flex-col">
                <h5 className="text-xl text-neutral-50 font-bold">#1</h5>
                <p className="text-xs text-neutral-100 font-light">in the world</p>
            </div>
        </div>
    </div>
  ): null;
}

export default About