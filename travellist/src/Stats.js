export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Please add your items...</p>;
  const numberItems = items.length;
  const numberPackedItems = items.reduce(
    (acc, curr) => (curr.packed ? acc + 1 : acc),
    0
  );
  const percentage = Math.round((numberPackedItems / numberItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You packed everything!✈️ 🛫 "
        : `You have ${numberItems} items on your list, and you already packed ${numberPackedItems} (${percentage}%)`}
    </footer>
  );
}
