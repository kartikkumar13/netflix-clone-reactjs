import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";

function Header() {
  const [expendSearch, setExpendSearch] = useState(false);
  const [expendProfile, setExpendProfile] = useState(false);
  const navRef = useRef();
  const searchRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY < 40) {
      navRef.current.classList.remove("bg-black");
    } else {
      navRef.current.classList.add("bg-black");
    }
  };
  useEffect(() => {
    searchRef.current.focus();
    if (expendSearch) {
      console.log(expendSearch);
    }
  }, [expendSearch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className="w-full min-h-10 flex justify-between items-center sm:px-12 px-2 z-50 fixed top-0 bg-gradient-to-b from-black to-transparent duration-700"
    >
      <div className="flex items-center gap-8">
        <img src={logo} alt="logo" className="max-h-16" />
        <ol className="text-gray-200 text-sm mdl:flex items-center gap-6 hidden">
          <li className="hover:text-gray-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/">TV Shows</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/">Movies</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/">New & Popular</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/">My List</a>
          </li>
        </ol>
      </div>
      <div>
        <ol className="mdl:flex items-center gap-6 hidden">
          <li className="relative flex items-center gap-2 flex-row-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setExpendSearch(false)}
              className={`h-6 w-6 text-gray-200 cursor-pointer duration-300 ease-linear ${
                expendSearch ? "block" : "hidden"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setExpendSearch(true)}
              className={`h-6 w-6 text-gray-200 cursor-pointer duration-300 ${
                expendSearch ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="search"
              className={`focus:outline-none py-1 px-2 text-gray-100 bg-gray-400/40 border border-gray-400 duration-300 origin-right ${
                expendSearch ? "opacity-100 w-full" : "opacity-0 w-0"
              }`}
            />
          </li>
          <li className="text-gray-200">Children</li>
          <li className="text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </li>
          <li className="flex items-center gap-1 relative">
            <img
              onClick={() => setExpendProfile((prev) => !prev)}
              className="rounded-md cursor-pointer"
              alt="profile"
              src="https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <ul
              className={`absolute bg-black/80 min-w-[170px] top-11 right-0 z-[100] duration-500
               ${expendProfile ? "" : "invisible -translate-y-36 opacity-0"}
              `}
            >
              <li className="flex gap-2 items-center p-2">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex-none"></div>
                <p className="text-gray-50 font-semibold">Kartik Kumar</p>
              </li>
              <li className="flex gap-2 items-center p-2">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex-none"></div>
                <p className="text-gray-50 font-semibold">Yash Panwar</p>
              </li>
              <li className="flex gap-2 items-center p-2">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex-none"></div>
                <p className="text-gray-50 font-semibold">Sagar Mathur</p>
              </li>
              <hr className="my-1 border-slate-600" />
              <li className="p-2 pl-3 text-gray-50 font-semibold cursor-pointer hover:translate-x-2 duration-300">
                Account
              </li>
              <li className="p-2 pl-3 text-gray-50 font-semibold cursor-pointer hover:translate-x-2 duration-300">
                Help Center
              </li>
              <li className="p-2 pl-3 text-red-500 font-bold cursor-pointer hover:translate-x-2 duration-300">
                Sign Out
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Header;
