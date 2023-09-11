import Card from "./Card";
function Cards() {
  const datas = [
    { id: 1, text1: "show jsx", text2: "jsx", color: "red" },
    { id: 2, text1: "show html", text2: "html", color: "blue" },
    { id: 3, text1: "show laravel", text2: "laravel", color: "yellow" },
    { id: 4, text1: "show php", text2: "php", color: "orange" },
    { id: 5, text1: "show js", text2: "js", color: "purple" },
  ];
  return (
    <div style={{ display: "flex" }}>
      {datas.map((data) => (
        <Card
          key={data.id}
          text1={data.text1}
          text2={data.text2}
          color={data.color}
          id={data.id}
        />
      ))}
    </div>
  );
}

export default Cards;
