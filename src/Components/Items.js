import { useState } from "react";

function Items({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
          value={item.packed}
          defaultChecked={item.packed}
        />
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}

export default Items;
