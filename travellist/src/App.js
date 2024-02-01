import initialItems from "./data";
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(i) {
    setItems((items) => [...items, i]);
  }
  return (
    <div className='app'>
      <Logo/>
      <Form onAddItem = {handleAddItems}/>
      <PackingList list={items}/>
      <Stats/>
    </div>
  );
}
function Logo(){
  return <h1>🧳 Travel Stuff 👜</h1>
}

function Form({onAddItem}){
  const [description, setDescription] = useState("")
  const [inputItem, setInputItem] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = {description, inputItem, packed: false, id: Date.now()}
    onAddItem(newItem)
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
function PackingList({list}) {
  return (
    <div className="list">
      <ul>
        {list.map((i) => (
          <List item={i} key ={i.key}/>
        ))}
      </ul>
    </div>
  );
}
function List({item}) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:'line-through'}: {}}>
      {item.inputItem}{' '}
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
