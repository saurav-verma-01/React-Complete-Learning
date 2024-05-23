import Friend from "./Friend";

const FreindsList = ({ list, onSelect, selectedFriend }) => {
  return (
    <ul>
      {list.map((item) => (
        <Friend
          item={item}
          key={item.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FreindsList;
