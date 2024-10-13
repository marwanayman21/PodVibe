import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import Info from './info/Info'
import Like from './like/Like'
import TitleNav from './title/TitleNav'
import AudioCard from '../../../components/audio/AudioCard'
import { PlayerContext } from '../../../context/PlayerContext'

const DetailLayout = () => {
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
    return  albumData ? (
        <div className='flex-1 h-[calc(100vh-10ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
            {/* NavBar */}
            <div className="w-full sticky top-0 z-50">
                <Navbar className={'bg-indigo-500'} />
            </div>

                {/* Content */}
                <div className="w-full h-full py-6 bg-gradient-to-b from-indigo-500 via-indigo-300/10 to-transparent space-y-11">
                    
                {/* info*/}
                <Info />
                <div className='w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-neutral-800/30 backdrop-blur md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-4 space-y-10 relative'>

                    <div className="space-y-7">
                        {/* Play , like More*/}
                        <Like />
                        {/* list*/}
                        <div className="w-full space-y-3">
                            {/* Title*/}
                            <TitleNav />
                            {/* list*/}
                            {songsData.filter((item) => albumData.audios.includes(item._id))  // Filtering by song IDs
                                .map((item, index) => (
                                    <AudioCard 
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        desc={item.desc}  
                                        duration={item.duration}
                                        id={index + 1}  // Assign an index to each song
                                        onPlay={() => playWithId(item._id)}  // Pass playWithId function as onPlay
                                    />
                            ))}
                        </div>
                    </div>
                    {/* footer */}
                    <Footer />
                </div>
        </div>
    </div>
    ) : null;
}

export default DetailLayout