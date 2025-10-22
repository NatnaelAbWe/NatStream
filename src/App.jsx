import { useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBbar";
import AnimationWrapper from "./Common/AminationWrapper";
import MainSection from "./Component/Main";

function App() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
  };

  return (
    <>
      <NavBar />
    </>
  );
}
export default App;
