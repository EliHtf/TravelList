import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function changeHandler(event) {
    setDescription(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (!description) return;

    const newItems = { id: new Date(), description, quantity, packed: false };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      <div className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <form className="add-form" action="" onSubmit={submitHandler}>
          <select
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          >
            {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="items ..."
            value={description}
            name="description"
            onChange={changeHandler}
          />
          <button className="button" type="submit">
            add
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
