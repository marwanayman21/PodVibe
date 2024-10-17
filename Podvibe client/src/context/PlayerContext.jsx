import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const url = 'http://localhost:8080/api';

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]); // Initialize albumsData
    const [track, setTrack] = useState(null);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        const selectedTrack = songsData.find(item => item._id === id);
        if (selectedTrack) {
            setTrack(selectedTrack);
            audioRef.current.src = selectedTrack.audio; // Ensure you have the audio URL in the track
            audioRef.current.load(); // Load the audio before playing
            try {
                await audioRef.current.play(); // Wait for the audio to play
                setPlayStatus(true);
            } catch (error) {
                console.error('Error playing audio:', error); // Handle errors
            }
        } else {
            console.error('Track not found:', id); // Handle track not found
        }
    }

    const previous = async () => {
        const currentIndex = songsData.findIndex(item => item._id === track._id);
        if (currentIndex > 0) {
            const prevTrack = songsData[currentIndex - 1];
            setTrack(prevTrack);
            audioRef.current.src = prevTrack.audio;
            audioRef.current.load(); // Load the new track
            try {
                await audioRef.current.play(); // Wait for the audio to play
                setPlayStatus(true);
            } catch (error) {
                console.error('Error playing previous audio:', error); // Handle errors
            }
        }
    };

    const next = async () => {
        const currentIndex = songsData.findIndex(item => item._id === track._id);
        if (currentIndex < songsData.length - 1) {
            const nextTrack = songsData[currentIndex + 1];
            setTrack(nextTrack);
            audioRef.current.src = nextTrack.audio;
            audioRef.current.load(); // Load the new track
            try {
                await audioRef.current.play(); // Wait for the audio to play
                setPlayStatus(true);
            } catch (error) {
                console.error('Error playing next audio:', error); // Handle errors
            }
        }
    };

    const seekSong = (e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
    };

    const getSongsData = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY0MjZmZTgyZjFjNzUyZWFmMjliNTEiLCJuYW1lIjoidXNlcjYiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzI4NTkyNzQ5LCJleHAiOjE3MjkxOTc1NDl9.mKbmaZJyOrIvPJytlUK8YTmWHbYDe4A7-_tv9lMVtZE"; // Use your actual token
            const config = {
                headers: {
                    "x-auth-token": token,
                },
            };
            const response = await axios.get(`${url}/audio`, config);
            setSongsData(response.data.data);
            setTrack(response.data.data[0]);

            if (audioRef.current) {
                audioRef.current.src = response.data.data[0]?.audio; // Set initial audio source
                audioRef.current.load(); // Load the initial audio
            }
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const getAlbumsData = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY0MjZmZTgyZjFjNzUyZWFmMjliNTEiLCJuYW1lIjoidXNlcjYiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzI4NTkyNzQ5LCJleHAiOjE3MjkxOTc1NDl9.mKbmaZJyOrIvPJytlUK8YTmWHbYDe4A7-_tv9lMVtZE"; // Use your actual token
            const config = {
                headers: {
                    "x-auth-token": token,
                },
            };
            const response = await axios.get(`${url}/album`, config); // Adjust the API endpoint as needed
            setAlbumsData(response.data.data); // Set albums data
        } catch (error) {
            console.error("Error fetching albums:", error);
        }
    };

    useEffect(() => {
        audioRef.current.ontimeupdate = () => {
            if (audioRef.current.duration) {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            }
        };
    }, []);

    useEffect(() => {
        getSongsData();
        getAlbumsData(); // Fetch albums data on component mount
    }, []);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        songsData,
        albumsData // Expose albumsData to context
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            <audio ref={audioRef} />
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
