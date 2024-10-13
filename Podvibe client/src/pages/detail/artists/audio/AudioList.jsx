import React, { useContext, useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import { PlayerContext } from '../../../../context/PlayerContext';
import AudioCard from '../../../../components/audio/AudioCard';

const AudioList = () => {
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
        <div className='w-full space-y-4'>
        <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
            Popular
        </h1>

        {/* Audios List */}
        <div className="space-y-0">
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

        {/* See More */}
        {/* album.audios.length > 5
            
        } */}
        <Link
            className='px-6 block text-sm text-neutral-400 font-medium hover:text-neutral-200 cursor-default ease-in-out duration-100'>
            See more
        </Link>

        {/* Pick up an artist */}
        <div className="space-y-4">
            <h1 className='md:text-xl text-lg text-neutral-50 font-bold'>
                Popular Pick
            </h1>

            {/*music list*/}
            <div className="space-y-0">
                <div className="flex items-start gap-x-3">
                    <img src={songsData[0].image} alt="" className="w-24 h-24 rounded-md object-cover object-center" />
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-x-1.5">
                            <img src={albumData.image} alt="" className="w-6 h-6 rounded-full object-cover object-center" />
                            <h6 className="text-sm text-neutral-400 font-medium">
                                Posted by {albumData.name}
                            </h6>
                        </div>
                        <h5 className="text-sm text-neutral-100 font-medium">
                        {songsData[0].name}
                        </h5>
                        <p className="text-sm text-neutral-400 font-normal">
                        {songsData[0].desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ) : null;
};

export default AudioList;
