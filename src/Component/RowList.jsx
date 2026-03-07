import MainSection from "./MainSection";
import requests from "../utils/requests";

const MainSectionList = ({ sectionRefs }) => {
  return (
    <>
      <MainSection
        title="NATISTREAM ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeMainSection={true}
        ref={sectionRefs.NetflixOriginal} // attach ref
      />
      <MainSection
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        ref={sectionRefs.Trending}
      />
      <MainSection
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        ref={sectionRefs["Top-Rated"]}
      />
      <MainSection
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        ref={sectionRefs.Action}
      />
      <MainSection
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        ref={sectionRefs.Comedy}
      />
      <MainSection
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        ref={sectionRefs.Horror}
      />
      <MainSection
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        ref={sectionRefs.Romance}
      />
      <MainSection
        title="TV Shows"
        fetchUrl={requests.fetchTvShow}
        ref={sectionRefs.tvShows}
      />
      <MainSection
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        ref={sectionRefs.Documentaries}
      />
    </>
  );
};

export default MainSectionList;
