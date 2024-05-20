import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((i) => [...i, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((i) => i.filter((item) => item.id !== id));
  };

  const handlePackedStatus = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPacked={handlePackedStatus}
      />
      <Stats />
    </div>
  );
};

export default App;
