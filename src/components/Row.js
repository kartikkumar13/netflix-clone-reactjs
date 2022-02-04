import React, { useEffect, useState, useRef } from "react";

const Row = ({ title, isLargePoster, url }) => {
  const [movieList, setMovieList] = useState([]);
  const [videoListXPosition, setVideoListXPosition] = useState(0);
  const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
  const videoListRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

  const moveNext = () => {
    videoListRef.current.scrollBy(400, 0);
    if (parseInt(videoListRef.current.scrollLeft) > 20) {
      prevBtnRef.current.classList.remove("invisible");
    } else {
      prevBtnRef.current.classList.add("invisible");
    }
    console.log(videoListRef.current.scrollLeft);
  };

  const movePrev = () => {
    videoListRef.current.scrollBy(-400, 0);
    if (parseInt(videoListRef.current.scrollLeft) > 20) {
      prevBtnRef.current.classList.remove("invisible");
    } else {
      prevBtnRef.current.classList.add("invisible");
    }
    console.log(videoListRef.current.scrollLeft);
  };

  const fetchMovieList = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovieList(data.results);
      //   console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = () => {
    if (parseInt(videoListRef.current.scrollLeft) > 20) {
      prevBtnRef.current.classList.remove("invisible");
    } else {
      prevBtnRef.current.classList.add("invisible");
    }
  };

  useEffect(() => {
    videoListRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchMovieList();
    console.log(videoListRef.current.scrollLeft);
  }, [url]);

  return (
    <div className="mb-8">
      <h2 className="text-gray-50 font-bold text-2xl mb-2 pl-16">{title}</h2>
      <div className="relative group">
        <button
          ref={prevBtnRef}
          className="absolute h-full z-30 px-2 left-0 top-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-300 invisible"
          onClick={() => movePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          ref={nextBtnRef}
          className="absolute h-full z-30 right-0 px-2 top-0 bg-black/40 opacity-0  group-hover:opacity-100 duration-300"
          onClick={() => moveNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div
          ref={videoListRef}
          className="w-full space-x-1 flex hidescrollbar overflow-y-hidden overflow-x-scroll pl-16 py-2 scroll-smooth"
        >
          {movieList.map((item) => {
            return (
              <div
                key={item.id}
                className="relative bg-red-100 rounded-md cursor-pointer transform hover:scale-110 hover:z-20 transition duration-500 select-none"
              >
                <img
                  className="max-w-[230px]  rounded-md select-none"
                  src={`${baseImgUrl}${item.backdrop_path}`}
                  alt={item.original_title}
                />
                <h3 className="absolute bottom-1 left-2 text-white font-light px-1">
                  {item.name !== undefined ? item.name : item.original_title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Row;
