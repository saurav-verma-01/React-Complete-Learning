import { useEffect } from "react";

const Timer = ({ seconds, dispatch }) => {
  const minutes = Math.floor(seconds / 60);
  const secondsRem = seconds % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{secondsRem < 10 && "0"} {secondsRem}
    </div>
  );
};

export default Timer;
