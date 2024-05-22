const Results = ({ bill, tip }) => {
  return (
    <h1>
      You Pay ${bill + tip} (${bill ? bill : "A"} bill + ${tip ? tip : "B"} tip)
    </h1>
  );
};

export default Results;
