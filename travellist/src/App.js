import initialItems from "./data";
import {useState} from 'react';

function App() {
  return (
    <div className='app'>
      <Logo/>
      <Form/>
      <PackingList list={initialItems}/>
      <Stats/>
    </div>
  );
}
function Logo(){
  return <h1>🧳 Travel Stuff 👜</h1>
}

function Form(){
  const [description, setDescription] = useState("input")
  const [inputItem, setInputItem] = useState(5)
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = {description, inputItem, packed: false, id: Date.now()}
    console.log(newItem)
    setDescription('')
    setInputItem(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trips ? </h3>
      <select value={inputItem} onChange={(e) => setInputItem(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Name of item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <List item={i} key ={i.key}/>
        ))}
      </ul>
    </div>
  );
}
function List({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:'line-through'}: {}}>
      {item.quantity}{' '}
      {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}
export default App;
