import React, { useState } from "react";

function App() {
  // useState untuk heading
  const [headingText, setHeadingText] = useState("");

  // useState untuk hover mouse
  const [isMouseOver, setMouseOver] = useState(false);

  // useState untuk mengambil inputan user berupa nama
  const [name, setName] = useState("");

  const [isSubmitted, setSubmitted] = useState(false);

  // function-function untuk handle event listener
  function handleSubmit(event) {
    setHeadingText(name);
    event.preventDefault();
    setName("");
    setSubmitted(true);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  // function untuk mengambil value dari kolom input
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{isSubmitted ? `Hello, ${headingText}!` : "Hello"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your name?"
          // berguna untuk menghubungkan nilai dari kolom input dgn state name
          value={name}
          onChange={handleChange}
        />
        <button
          type="submit"
          // Mengatur inline style untuk component
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          // event listener
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
