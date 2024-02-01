import { useState } from "react";
import List from "./List";

export default function PackingList({ list, handleDeleteItem, handleCheckbox, clearItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = list;
  } else if (sortBy === "description") {
    sortedItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = list.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleSort(e) {
    setSortBy(e);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <List
            item={i}
            handleDeleteItem={handleDeleteItem}
            handleCheckbox={handleCheckbox}
            key={i.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button type="reset" onClick={clearItems}>Clear list</button>
      </div>
    </div>
  );
}
