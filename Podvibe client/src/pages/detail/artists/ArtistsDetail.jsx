import React from 'react'
import Sidebar from '../../main/sidebar/Sidebar'
import Player from '../../../components/player/Player'
import ArtistsLayout from './ArtistsLayout'

const ArtistsDetail = () => {
  return (
    <div className='w-full flex-1 flex gap-x-2 relative'>
        {/*sidevbar*/}
        <Sidebar />

        {/*Artists Detail*/}
        <ArtistsLayout />

        {/*Player*/}
        <Player/>
    </div>
  )
}

export default ArtistsDetail