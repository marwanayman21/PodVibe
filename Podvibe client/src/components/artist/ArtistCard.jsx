import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PlayBtn from '../playbtn/PlayBtn'

const ArtistCard = ({ image, name, desc, id }) => {
return (
    
        <Link 
        to={`/artist/album/${id}`} 
        className='w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'
        >
        <div className="w-full h-auto relative">
            <img src={image} alt="" className="w-full aspect-square object-cover object-center rounded-full" />
            {/* Hover Image */}
            <PlayBtn />
        </div>
        <div className="space-y-1">
            <h5 className="text-base font-medium text-neutral-100">
            {name}
            </h5>
            <p className="text-sm text-neutral-400">
            {desc}
            </p>
        </div>
        </Link>
    )
}


export default ArtistCard