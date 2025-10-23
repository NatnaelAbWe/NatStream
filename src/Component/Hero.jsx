import { useState, useEffect } from "react";
import instance from "../utils/axios";
import requests from "../utils/requests";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await instance.get(requests.fetchNetflixOriginals);
        const results = req.data.results;
        if (results && results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        }
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const discription = truncate(movie?.overview, 150);

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="bg-black/40 w-full h-full flex flex-col justify-center p-10">
        <h1 className="text-4xl md:text-9xl font-bold mb-4 text-white text-shadow-amber-400 text-shadow-lg">
          {movie?.title || movie?.name}
        </h1>
        {movie?.overview && (
          <TypeAnimation
            sequence={[`${discription}` || "", 1000]}
            wrapper="span"
            speed={10}
            repeat={3}
            cursor={false}
            className="max-w-2xl font-medium mt-12 text-white md:text-3xl"
          />
        )}
      </div>
    </div>
  );
}
