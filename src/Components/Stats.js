function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const persentage = Math.round((numPacked / numItems) * 100);
  if (!numItems) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🧨</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      {persentage < 100 ? (
        <em>
          💼 You have {numItems} items on your list, and you already packed
          {numPacked}({persentage}%)
        </em>
      ) : (
        <em>You got every thing! Ready to go ✈</em>
      )}
    </footer>
  );
}

export default Stats;
