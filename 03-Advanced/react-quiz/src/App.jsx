import { useEffect } from "react";
import Header from "./Header";
import MainComp from "./MainComp";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error", err));
  }, []);

  return (
    <div className="app">
      <Header />
      <MainComp>
        <p>1/15</p>
        <p>Question?</p>
      </MainComp>
    </div>
  );
};

export default App;
