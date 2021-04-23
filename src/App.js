import React, { useState } from "react";
import logo from "./logo.svg";

// import be from './public/';

import "./App.css";
import backgrounds from "./backgrounds";

function App() {
  const [bg, setBG] = useState("bunny-ears.mp4");
  const bgChange = (event) => {
    setBG(event.target.value);
  };
  return (
    <div className="App-header">

      {bg.split(".")[1] === "mp4" ? (
        <video height="100%" width="100%" autoPlay muted loop src={process.env.PUBLIC_URL + bg} poster={process.env.PUBLIC_URL + `/${bg.split(".")[0]}.png`}></video>
      ) : (
        <img src={process.env.PUBLIC_URL + bg} alt="logo" />
      )}
      <select name="select-bg" id="select-bg" onChange={bgChange}>
        {backgrounds.map((item, idx) => {
          return (
            <option key={idx} value={item.name + "." + item.type}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;