const StartScreen = ({ num, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <p>{num} questions to test your React Mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&rsquo;s Start
      </button>
    </div>
  );
};

export default StartScreen;
