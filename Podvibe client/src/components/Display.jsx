import React, { useContext, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { PlayerContext } from '../context/PlayerContext';

const Display = () => {
    const { albumsData } = useContext(PlayerContext) || { albumsData: [] }; // Default to empty array
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";
    const bgColor = isAlbum && albumsData.length > 0 
        ? albumsData.find((x) => (x._id === albumId)).bgColour 
        : "#121212";

    useEffect(() => {
        if (isAlbum && albumsData.length > 0) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
        } else {
            displayRef.current.style.background = `#121212`;
        }
    }, [isAlbum, bgColor, albumsData]); // Added dependencies

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            {albumsData.length > 0 
                ? <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x) => (x._id === albumId))} />} />
                </Routes>
                : null
            }
        </div>
    );
};

export default Display;
