import React, { useState } from "react";

function App() {
  // useState untuk heading
  const [headingText, setHeadingText] = useState("Hello");

  // useState untuk hover mouse
  const [isMouseOver, setMouseOver] = useState(false);

  // function-function untuk handle event listener
  function handleClick() {
    setHeadingText("Submitted!");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        // Mengatur inline style untuk component
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        // event listener
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
