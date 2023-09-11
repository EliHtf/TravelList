import { useState } from "react";

function Card({ text1, text2, color, id }) {
  const [selectedId, setSelectedId] = useState(null);

  function clickHandler(id) {
    setSelectedId(selectedId === id ? null : id);
  }
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: selectedId === id ? color : "gray",
        border: "1px solid black",
        margin: "50px",
      }}
      onClick={() => clickHandler(id)}
    >
      <h4>{selectedId === id ? text2 : text1}</h4>
    </div>
  );
}

export default Card;
