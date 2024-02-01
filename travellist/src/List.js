export default function List({ item, handleDeleteItem, handleCheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleCheckbox(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.inputItem} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
