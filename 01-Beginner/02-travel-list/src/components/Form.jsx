import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuanity] = useState("1");

  const arr15 = Array.from({ length: 22 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      description: desc,
      packed: false,
      quantity,
      id: new Date().toISOString(),
    };

    onAddItem(itemData);

    setDesc("");
    setQuanity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip? 😍</h3>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuanity(Number(e.target.value))}
      >
        {arr15.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        id="item-name"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
