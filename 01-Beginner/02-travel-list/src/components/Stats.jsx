const Stats = ({ items }) => {
  const numItems = items.length;

  if (numItems === 0) {
    return (
      <footer style={{ padding: "2rem" }}>
        <p>Start adding items for you next Trip.</p>
      </footer>
    );
  }

  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItems == numItems
          ? "You have packed everything you need for the trip ✈🛬"
          : `You have ${numItems} items on your list and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
