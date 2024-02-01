import { useState } from "react";
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import Logo from './Logo';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(i) {
    setItems((items) => [...items, i]);
  }
  function handleDeleteItem(deleteId) {
    setItems((items) => items.filter((item) => item.id !== deleteId));
  }
  function handleCheckbox(selectId) {
    setItems((items) =>
      items.map((item) =>
        item.id === selectId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    const confirmed = window.confirm('Are you sure to delete all items? ');
    if(confirmed)
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        list={items}
        handleDeleteItem={handleDeleteItem}
        handleCheckbox={handleCheckbox}
        clearItems = {clearItems}
      />
      <Stats items ={items}/>
    </div>
  );
}
export default App;
