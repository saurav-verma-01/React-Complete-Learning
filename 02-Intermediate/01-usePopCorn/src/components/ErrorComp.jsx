const ErrorComp = ({ message }) => {
  return (
    <div className="error">
      <span>❌</span> {message}
    </div>
  );
};

export default ErrorComp;
