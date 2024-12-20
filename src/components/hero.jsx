// import React from 'react'
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
//import { preview } from 'vite';

const hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked , setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setIsLoadedVideos] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setIsLoadedVideos((prev) => prev +1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) +1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`; 

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hiddden rounded-lg">
                <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all, duration-500 ease-in hpver:scale-100 hover:opacity-100">
                    <video 
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 orign-center sccale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                        />
                </div>
            </div>

            <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">

            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">
                    <b>v</b>alorant
                </h1>

                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the metagame layer!
                    <br /> Unleash the play economy
                </p>
                <button
              id="watch-trailer"
              title="Watch trailer"
             // leftIcon={< TiLocationArrow /> }
             // containerClass="bg-yellow-300 flex-center gap-1"
             />
               
            </div>

        </div>

        </div>
    </div>
  )
}

export default hero