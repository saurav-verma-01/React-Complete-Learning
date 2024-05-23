import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [paidBy, setPaidBy] = useState("");

  const { name } = selectedFriend;
  return (
    <form className="form-split-bill">
      <h2>{`SPLIT A BILL WITH ${name}`}</h2>
      <label htmlFor="bill-amount">💰 Bill value</label>
      <input
        id="bill-amount"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="paid-by-user">🧍‍♀️ Your expense</label>
      <input
        type="text"
        id="paid-by-user"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor="paid-by-friend">👫 {name}&apos;s expense</label>
      <input id="paid-by-friend" type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
