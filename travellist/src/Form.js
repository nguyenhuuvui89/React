import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [inputItem, setInputItem] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, inputItem, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setInputItem(1);
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
        onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
