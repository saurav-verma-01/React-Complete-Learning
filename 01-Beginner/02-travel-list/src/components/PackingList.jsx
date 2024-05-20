import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onPacked }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPacked={onPacked}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
