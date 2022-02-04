import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoBanner(props) {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="w-full flex justify-center relative">
      <div className="absolute w-full h-96 bg-gradient-to-b from-transparent to-black -bottom-1"></div>
      <ReactPlayer
        width="100%"
        height="100%"
        url={props.data.videoUrl}
        playing={true}
        loop={true}
        muted={isMuted ? false : true}
      />
      <div className="absolute bottom-10 mdl:bottom-1/6 lg:bottom-1/4 xl:bottom-1/4 left-4 sm:left-16 space-y-4 max-w-xs lg:max-w-md">
        <img
          className="max-h-28 mdl:max-h-32 lg:max-h-40"
          src={props.data.titleUrl}
          alt=""
        />
        <p className="text-white text-sm">{props.data.synopsis}</p>
        <div className="space-x-4 flex">
          <button className="px-8 py-2  text-xs lg:text-lg bg-white rounded-md flex items-center gap-3 font-bold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </button>
          <button
            className="px-8 py-2 text-xs lg:text-lg bg-gray-400 text-white rounded-md flex items-center gap-3 font-bold cursor-pointer"
            style={{ background: "#c0c0c0a6" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            More Info
          </button>
        </div>
      </div>
      <div className="absolute right-0 flex text-xl space-x-4 items-center bottom-1/4">
        {!isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white  rounded-full border-2 border-white p-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setIsMuted((isMuted) => !isMuted);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              clipRule="evenodd"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white  rounded-full border-2 border-white p-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setIsMuted((isMuted) => !isMuted);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}

        <p
          className="text-white pl-4 pr-10 py-1 border-l-4 border-white"
          style={{ background: "#c0c0c045" }}
        >
          {props.data.contentType}
        </p>
      </div>
    </div>
  );
}

export default VideoBanner;
