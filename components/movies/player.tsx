"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

interface Player {
    url: string;
}
// const Player = ({ url }: Player) => {
const Player = () => {
    const videoUrl = 'https://movie.darksidemm.com/file/black-blaze/ssstik.io_1732907726778.mp4';   
    const playerRef = useRef(null);
     useEffect(() => { 
        if (playerRef.current) { 
            const video = playerRef.current; 
            if (Hls.isSupported() && video) { 
                const hls = new Hls(); 
                hls.loadSource(videoUrl); 
                hls.attachMedia(video); 
            } 
        } 
    }, [videoUrl]);
    return (
        <div className="relative h-[80%] m-4 bg-red-400">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-900">
                <ReactPlayer
                    className='react-player'
                    ref={playerRef}
                    url={videoUrl}
                    controls={true}
                    width='100%'
                    height='100%'
                    volume={0.5}
                    pip={true}
                    config={{
                        file: {
                            attributes: {
                                controlsList: 'nodownload'
                            },
                            forceHLS: true, // Force the use of hls.js
                            hlsOptions: {
                                startLevel: 3

                            },
                            hlsVersion: '0.13.1',
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Player;