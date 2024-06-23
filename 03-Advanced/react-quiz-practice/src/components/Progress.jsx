import React from "react";

const Progress = ({ index, num, points, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress max={num} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {num}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
