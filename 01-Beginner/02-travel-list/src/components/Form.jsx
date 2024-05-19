const Form = () => {
  const arr15 = Array.from({ length: 22 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip? 😍</h3>
      <select name="quantity" id="quantity">
        {arr15.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" id="item-name" />
      <button>Add</button>
    </form>
  );
};

export default Form;
