import MainSection from "./MainSection";
import requests from "../utils/requests";

const MainSectionList = () => {
  return (
    <>
      <MainSection
        title="NATISTREAM ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeMainSection={true}
      />
      <MainSection title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MainSection title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <MainSection
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MainSection
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MainSection
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <MainSection
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MainSection title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <MainSection
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
};

export default MainSectionList;
