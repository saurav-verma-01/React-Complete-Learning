import Button from "./Button";

const Friend = ({ item, onSelect, selectedFriend }) => {
  //   console.log(item);
  const isSelected = item.id === selectedFriend?.id;

  const handleFreindSelection = () => {
    onSelect(isSelected ? null : item);
  };

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance === 0 && <p>you and {item.name} are even.</p>}
      <Button onClick={handleFreindSelection}>
        {isSelected ? "Close" : "Show"}
      </Button>
    </li>
  );
};

export default Friend;
