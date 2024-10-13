import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Artists from './artists/Artists'
import Album from './album/Album'
import Podcast from './podcast/Podcast'
import Footer from '../../../components/footer/Footer'

const Content = () => {
  return (
    <div className='flex-1 h-[calc(100vh-10ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
        {/* NavBar */}
        <div className="w-full sticky top-0 z-50">
            <Navbar className={'bg-[#111113]'} />
        </div>
        {/* Content */}
        <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 space-y-11">
        {/* Popular artists */}
        <Artists />
        {/* Popular albums */}
        <Album />
        {/* Popular Playlists */}

        {/* Popular podcasts */}
        <Podcast />
        {/* footer */}
        <Footer />
        </div>
    </div>
  )
}

export default Content