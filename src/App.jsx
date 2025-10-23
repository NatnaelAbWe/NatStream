import "./App.css";
import NavBar from "./Component/NavBbar";
import AnimationWrapper from "./Common/AminationWrapper";
import MainSection from "./Component/Main";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}
export default App;
