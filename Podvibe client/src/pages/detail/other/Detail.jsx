import React from 'react'
import Player from '../../../components/player/Player'
import Sidebar from '../../main/sidebar/Sidebar'
import DetailLayout from './DetailLayout'

const Detail = () => {
  return (
    <div className='w-full flex-1 flex gap-x-2 relative'>
        {/*sidevbar*/}
        <Sidebar />

        {/*Artists Detail*/}
        <DetailLayout />

        {/*Player*/}
        <Player/>
    </div>
  )
}

export default Detail