import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import ArtistInfo from './artist/ArtistInfo'
import Follow from './follow/Follow'
import AudioList from './audio/AudioList'
import Album from '../../main/content/album/Album'
import About from './about/About'
import { PlayerContext } from '../../../context/PlayerContext'

const ArtistsLayout = () => {
const { id } = useParams();  // Getting album ID from the URL
const [albumData, setAlbumData] = useState(null);
const { playWithId, albumsData, songsData } = useContext(PlayerContext);

useEffect(() => {
    // Find the album by ID and set the album data
    const album = albumsData.find((item) => item._id === id);
    if (album) {
        setAlbumData(album);
    }
}, [albumsData, id]);
return albumData ? (
    <div className='flex-1 h-[calc(100vh-10ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
        {/* NavBar */}
        <div className="w-full sticky top-0 z-50">
            <Navbar className={'bg-rose-500'} />
        </div>

        {/* Content */}
        <div className="w-full h-full py-6 bg-gradient-to-b from-rose-500 via-rose-300/10 to-transparent space-y-11">
            
            {/* Artist info*/}
            <ArtistInfo />

            <div className='w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-neutral-800/30 backdrop-blur md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-4 space-y-10'>

            <div className="space-y-7">
            {/* Play follow section*/}
            <Follow />
            {/* list*/}
            <AudioList />
            </div>
            {/* album*/}
            <Album />
            {/* about*/}
            <About />
            {/* footer */}
            <Footer />
            </div>
        </div>
    </div>
): null;
}

export default ArtistsLayout