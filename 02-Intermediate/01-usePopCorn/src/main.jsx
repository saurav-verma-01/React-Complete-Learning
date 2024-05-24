import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import StarRating from "./StarRating.jsx";

const Test = () => {
  const [movieRating, setMovieRating] = useState(3);
  return (
    <div>
      <StarRating setOutRating={setMovieRating} />
      <h1>The Rating of the film is {movieRating}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} color={"#FF4B3E"} size={24} defaultRating={5} />

    <StarRating
      maxRating={8}
      color={"#01295F"}
      size={36}
      className="purple-bg"
      defaultRating={2}
    />
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]} />
    <Test />
  </React.StrictMode>
);
