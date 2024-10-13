import React, { useContext } from 'react'; // Add useRef and useEffect here
import { Routes, Route, useLocation } from 'react-router-dom'; // Don't forget to import useLocation
import { PlayerContext } from './context/PlayerContext';
import Main from './pages/main/Main';
import AuthContainer from './pages/auth/AuthContainer'; // Ensure this path is correct
import ArtistsDetail from './pages/detail/artists/ArtistsDetail'; // Ensure this path is correct
import Detail from './pages/detail/other/Detail';

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const { albumsData } = useContext(PlayerContext) || { albumsData: [] }; // Default to empty array
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";



  return (
    <div className='w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col p-2 overflow-hidden'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/auth' element={<AuthContainer />} />
        <Route path='/artist/album/:id' element={<ArtistsDetail album={albumsData.find((x) => (x._id === albumId))} />} />
        <Route path='album/:id' element={<Detail album={albumsData.find((x) => (x._id === albumId))} />} />
      </Routes>
      <audio ref={audioRef} src={track ? track.file : ''} preload='auto'></audio>
    </div>
  );
};

export default App;
