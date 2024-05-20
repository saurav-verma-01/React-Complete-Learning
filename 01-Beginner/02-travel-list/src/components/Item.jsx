const Item = ({ item, onDeleteItem, onPacked }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="packed"
        id="packed"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
