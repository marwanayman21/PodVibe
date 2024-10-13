import React, { useContext } from 'react';
import Tag from '../../../../components/tag/Tag';
import ArtistCard from '../../../../components/artist/ArtistCard';
import { PlayerContext } from '../../../../context/PlayerContext';

const Artists = () => {
  const { albumsData } = useContext(PlayerContext);

  return (
    <div className='w-full space-y-4'>
      {/* Tag */}
      <Tag title={"Popular Artists"} link={"/"} />

      {/* Artists list */}
      <div className='flex overflow-auto'>
        <div className='w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2'>
          {albumsData.map((item, index) => (
            <ArtistCard
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}        
        </div>
      </div>
    </div>
  );
};

export default Artists;
