import React from "react";
import "./App.css";

import Header from "./components/Header";
import Section from "./components/Section";
import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      {data.map((element, index) => {
        const name = element.category;
        const movies = element.images;

        return <Section key={index} category={name} images={movies} />;
      })}
    </>
  );
}

export default App;
