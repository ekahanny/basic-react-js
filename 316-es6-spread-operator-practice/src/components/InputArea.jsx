import React, { useState } from "react";

function InputArea(props) {
  // utk mengambil value dari kolom input
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    // mengambil value dari input
    const value = event.target.value;
    // assign value tsb
    setInputText(value);
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        name="inputText"
        value={inputText}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          // mengosongkan kolom input jika tombol diklik
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
