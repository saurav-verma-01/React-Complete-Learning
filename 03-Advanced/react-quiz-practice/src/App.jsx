import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import MainContainer from "./MainContainer";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  // Statuses --> Loading..., Error..., Ready..., Active..., Finished
  status: "loading",
  index: 0,
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
    case "start":
      return {
        ...state,
        status: "start",
      };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index } = state;
  const numberOfQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen num={numberOfQuestions} dispatch={dispatch} />
        )}
        {status === "start" && <Question question={questions[index]} />}
      </MainContainer>
    </div>
  );
};

export default App;
