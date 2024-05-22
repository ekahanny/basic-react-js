import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // utk menyimpan item yang akan ditambahkan
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    // menambahkan item baru
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
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
      <InputArea onAdd={addItem} />
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
