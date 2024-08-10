import React from "react";
import "./App.css";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import TextBox from "./components/TextBox";
const App = () => {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <ImageThree />
    </div>
  );
};

export default App;
