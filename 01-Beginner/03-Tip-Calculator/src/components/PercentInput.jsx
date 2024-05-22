const PercentInput = ({ children, tip, onTipChange }) => {
  return (
    <div className="percent-div">
      <label htmlFor="percent-input">{children}</label>
      <select value={tip} onChange={(e) => onTipChange(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="8">It was Okay (8%)</option>
        <option value="16">It was Good (16%)</option>
        <option value="24">Absolutely Amazing (24%)</option>
        <option value="32">Are Bhai Makkhan tha Makkhan (32%)</option>
      </select>
    </div>
  );
};

export default PercentInput;
