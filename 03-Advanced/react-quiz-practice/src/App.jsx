import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const initialState = {
  questions: [],
  // Statuses --> Loading..., Error..., Ready..., Active..., Finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainContainer>
        <p>1/15</p>
        <p>Question?</p>
      </MainContainer>
    </div>
  );
};

export default App;
