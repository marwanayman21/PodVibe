import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// Import required modules
import { FreeMode } from 'swiper/modules';
import Tag from '../../../../components/tag/Tag';
import AlbumCard from '../../../../components/album/AlbumCard';
import { PlayerContext } from '../../../../context/PlayerContext';

const Album = () => {

    const { albumsData } = useContext(PlayerContext);

return (
<div className='w-full space-y-4'>
    <Tag title={"Popular Albums"} link={"/"} />

    {/* Album list */}
    <Swiper
    slidesPerView={5}
    spaceBetween={15}
    breakpoints={{
        '@0.00': {
        slidesPerView: 2,
        },
        '@0.75': {
        slidesPerView: 3,
        },
        '@1.00': {
        slidesPerView: 4,
        },
        '@1.50': {
        slidesPerView: 5,
        },
    }}
    modules={[FreeMode]}
    className="mySwiper"
    >
    {/* Album card */}
    {albumsData.map((data, index) => (
        <SwiperSlide key={index}>
        <AlbumCard
            id={data._id}
            image={data.image}
            name={data.name}
            desc={data.desc}
        />
        </SwiperSlide>
    ))}
    </Swiper>
</div>
);
};

export default Album;
