import NavBar from "../Component/NavBbar";
import MainSection from "../Component/MainSection";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import MainSectionList from "../Component/RowList";
import { useRef } from "react";

export default function Home() {
  const trendingRef = useRef(null);
  const originalRef = useRef(null);
  const topRatedRef = useRef(null);
  const actionRef = useRef(null);
  const comedyRef = useRef(null);
  const horrorRef = useRef(null);
  const romanceRef = useRef(null);
  const documentaryRef = useRef(null);
  const tvShowsRef = useRef(null);

  const sectionRefs = {
    Trending: trendingRef,
    NetflixOriginal: originalRef,
    "Top-Rated": topRatedRef,
    Action: actionRef,
    Comedy: comedyRef,
    Horror: horrorRef,
    Romance: romanceRef,
    Documentaries: documentaryRef,
    tvShows: tvShowsRef,
  };

  function scrollToSection(ref) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <NavBar sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <Hero />
      {/* <MainSection /> */}
      <MainSectionList sectionRefs={sectionRefs} />
      <Footer />
    </>
  );
}
