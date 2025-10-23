import NavBar from "../Component/NavBbar";
import MainSection from "../Component/MainSection";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import MainSectionList from "../Component/RowList";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <MainSection />
      <MainSectionList />
      <Footer />
    </>
  );
}
