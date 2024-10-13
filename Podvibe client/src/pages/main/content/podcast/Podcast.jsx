import { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode } from 'swiper/modules';
import Tag from '../../../../components/tag/Tag';
import PodcastCard from '../../../../components/podcast/PodcastCard';
import { PlayerContext } from '../../../../context/PlayerContext';

const Podcast = () => {

    const { songsData } = useContext(PlayerContext);

  return (
    <div className='w-full space-y-4'>
        <Tag title={"Episodes For You"} link={"/"} />

        {/* Podcasts list */}
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
            {songsData.map((data,ind)=>(
                <SwiperSlide key={ind}>
                <PodcastCard
                    id={data._id}
                    image={data.image}
                    name={data.name}
                    desc={data.desc}
                />
                </SwiperSlide>
            ))}
            
        </Swiper>
    </div>
    )
}

export default Podcast