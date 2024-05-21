import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });

    // mengosongkan kolom input jika tombol diklik
    setInputText("");
  }

  // mencari item pada array yg indexnya !== id dari item yg diklik
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
