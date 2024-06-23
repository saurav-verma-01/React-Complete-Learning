import React from "react";
import Options from "./components/Options";

const Question = ({ question }) => {
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
