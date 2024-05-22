import { useState } from "react";
import BillInput from "./components/BillInput";
import PercentInput from "./components/PercentInput";
import Results from "./components/Results";
import ResetBtn from "./components/ResetBtn";

const App = () => {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState("");
  const [friendsTip, setFriendsTip] = useState("");

  const tip = (bill * ((yourTip + friendsTip) / 2)) / 100;

  const handleReset = () => {
    setBill("");
    setYourTip("");
    setFriendsTip("");
  };

  return (
    <div className="app">
      <BillInput bill={bill} onBillChange={setBill} />
      <PercentInput tip={yourTip} onTipChange={setYourTip}>
        How did you like the service?
      </PercentInput>
      <PercentInput tip={friendsTip} onTipChange={setFriendsTip}>
        How did your friend like the service?
      </PercentInput>
      <Results bill={bill} tip={tip} />
      <ResetBtn onReset={handleReset} />
    </div>
  );
};

export default App;
