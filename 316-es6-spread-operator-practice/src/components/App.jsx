import React, { useState } from "react";

function App() {
  // utk mengambil value dari kolom input
  const [inputText, setInputText] = useState("");

  // utk menyimpan item yang akan ditambahkan
  const [items, setItems] = useState([]);

  function handleChange(event) {
    // mengambil value dari input
    const value = event.target.value;
    // assign value tsb
    setInputText(value);
  }

  function handleClick() {
    // menambahkan item baru
    setItems((prevItems) => {
      console.log(prevItems);
      return [...prevItems, inputText];
    });

    // mengosongkan kolom input jika tombol diklik
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="inputText"
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* menampilkan list item yg ditambahkan */}
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
