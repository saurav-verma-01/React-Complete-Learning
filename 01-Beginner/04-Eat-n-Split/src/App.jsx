import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FreindsList from "./components/FreindsList";

const initialFriends = [
  {
    id: 118836,
    name: "Manish Srivastava",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Dipanshu Sorout",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Abhishek Prajapati",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [list, setList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowForm = () => {
    setShowAddForm((show) => !show);
    setSelectedFriend(null);
  };

  const handleAddFriend = (newFriend) => {
    setList((list) => [...list, newFriend]);
    setShowAddForm(false);
  };

  const handleSelected = (friend) => {
    setSelectedFriend(friend);
    setShowAddForm(false);
  };

  const handleSplitBillApp = (newBalance) => {
    setList((prevList) =>
      prevList.map((listItem) => {
        if (listItem.id === selectedFriend.id) {
          return { ...listItem, balance: listItem.balance + newBalance };
        } else {
          return listItem;
        }
      })
    );
    setSelectedFriend(false);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <FreindsList
          list={list}
          onSelect={handleSelected}
          selectedFriend={selectedFriend}
        />
        {showAddForm && <FormAddFriend onAdd={handleAddFriend} />}
        <Button onClick={handleShowForm}>
          {showAddForm ? "Close" : "Add Friend"}
        </Button>
      </aside>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onBillSplit={handleSplitBillApp}
        />
      )}
    </div>
  );
};

export default App;
