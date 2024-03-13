import "./App.css";
import React, { useState } from "react";

const image = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [current, setCurrent] = useState(0);

  function LeftButton() {
    setCurrent(current === 0 ? image.length - 1 : current - 1);
  }

  function RightButton() {
    setCurrent(current === image.length - 1 ? 0 : current + 1);
  }

  return (
    <div>
      <h2>Project 2: Carousel</h2>

      <div className="row mt-5">
        <button className="btn btn-primary col-1" onClick={LeftButton}> ⬅</button>
        <div className="col-6 ml-2">
          {image.map(
            (image, i) =>
              current === i && (
                <div>
                  <img
                    src={image}
                    alt="imagedata"
                    height={300}
                    width={950}
                  ></img>
                </div>
              )
          )}
        </div>
        <button className="btn btn-primary col-1 ml-2" onClick={RightButton}> ⮕</button>
      </div>
    </div>
  );
}

export default App;
