import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="movies-carousel">
      <p>{category}</p>
      <div>
        {images.map((img, index) => {
          return <img key={index} alt="Netflix movie" src={img} />;
        })}
      </div>
    </div>
  );
};

export default Section;
