import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onPacked, onClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;

  if (sortBy === "input") sortedList = items;

  if (sortBy === "desc")
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedList = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPacked={onPacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="desc">Sort by Name</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
