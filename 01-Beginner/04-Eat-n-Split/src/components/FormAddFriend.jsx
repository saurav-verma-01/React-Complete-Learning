import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAdd }) => {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48?u=");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      name: friendName,
      id,
      balance: 0,
      image: `${friendImg}${id}`,
    };
    onAdd(newFriend);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👫 Friend</label>
      <input
        id="friend-name"
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label htmlFor="friend-image">🌄 Image URL</label>
      <input id="friend-image" type="text" value={friendImg} readOnly />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
