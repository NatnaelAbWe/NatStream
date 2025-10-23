import { useState, useEffect, useDebugValue } from "react";
import instance from "../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

export default function MainSection({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noTrailer, setNoTrailer] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setNoTrailer(false);
    if (trailerUrl) {
      setTrailerUrl("");
      setIsModalOpen(false);
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
            setTrailerUrl(videoId);
            setIsModalOpen(true);
          } else {
            setNoTrailer(true);
          }
        })
        .catch(() => {
          setNoTrailer(true);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row bg-gradient-to-r from-indigo-500 via-black to-indigo-500 font-bold text-2xl">
      <h1 className="rowtitle">{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span
              className="modal__close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </div>
      )}

      {noTrailer && (
        <div className="modal">
          <div className="modal__content small">
            <span className="modal__close" onClick={() => setNoTrailer(false)}>
              &times;
            </span>
            <p>No trailer available for this movie.</p>
          </div>
        </div>
      )}
      <div className="text-black">
        <hr />
      </div>
    </div>
  );
}
