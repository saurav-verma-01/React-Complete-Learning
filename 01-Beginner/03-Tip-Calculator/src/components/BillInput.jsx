const BillInput = ({ bill, onBillChange }) => {
  return (
    <div className="bill-input">
      <label htmlFor="bill-input">How much was the Bill?</label>
      <input
        type="number"
        id="bill-input"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
