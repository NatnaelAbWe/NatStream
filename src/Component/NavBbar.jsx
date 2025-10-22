import { useState, useRef, useEffect } from "react";
import logo from "../assets/NatStream_Logo.png";

export default function NavBar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobMenu = useRef(null);
  const closeOpenMenus = (e) => {
    if (mobileMenu && !mobMenu.current?.contains(e.target)) {
      setMobileMenu(false);
      setIsGenreOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, []);

  return (
    <nav className="sticky top-0 w-full h-24 bg-gradient-to-r from-indigo-500 via-black to-indigo-500 text-white flex items-center justify-between md:justify-center md:gap-10 px-6">
      <img src={logo} className="w-auto h-10 md:h-16" alt="Nat Stream logo" />

      <input
        type="text"
        placeholder="Search"
        className="bg-white h-10 md:h-16 w-50 md:w-96 text-black text-2xl p-3 border-2 border-gray-500 rounded-full outline-none"
      />

      <ul className="hidden md:flex gap-8 text-3xl font-bold items-center">
        <li className="hover:text-indigo-400 cursor-pointer hover:scale-110 transition">
          Home
        </li>
        <li className="hover:text-indigo-400 cursor-pointer hover:scale-110 transition">
          Movies
        </li>
        <li className="relative">
          <button
            onClick={() => setIsGenreOpen(!isGenreOpen)}
            className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer hover:scale-110 transition"
          >
            Genre
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 transition-transform ${
                isGenreOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {isGenreOpen && (
            <div className="absolute bg-black bg-opacity-90 border border-indigo-500 rounded-lg shadow-lg flex flex-col text-lg w-40">
              {["Action", "Comedy", "Horror", "Sci-Fi"].map((genre) => (
                <button
                  key={genre}
                  className="px-4 py-2 text-white hover:bg-indigo-500 hover:text-black text-left transition"
                >
                  {genre}
                </button>
              ))}
            </div>
          )}
        </li>
      </ul>

      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
        {mobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {mobileMenu && (
        <div
          ref={mobMenu}
          className="absolute top-24 left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-6 text-2xl font-bold z-20 md:hidden transition-all duration-300"
        >
          <li className="hover:text-indigo-500 cursor-pointer hover:scale-110 transition">
            Home
          </li>
          <li className="hover:text-indigo-500 cursor-pointer hover:scale-110 transition">
            Movies
          </li>
          <li className="relative">
            <button
              onClick={() => setIsGenreOpen(!isGenreOpen)}
              className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer hover:scale-110 transition"
            >
              Genre
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 transition-transform ${
                  isGenreOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isGenreOpen && (
              <div className="flex flex-col items-center mt-2">
                {["Action", "Comedy", "Horror", "Sci-Fi"].map((genre) => (
                  <button
                    key={genre}
                    className="px-4 py-2 text-white hover:bg-indigo-500 hover:text-black rounded transition"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            )}
          </li>
        </div>
      )}
    </nav>
  );
}
