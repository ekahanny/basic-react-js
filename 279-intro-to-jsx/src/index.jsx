import React from "react";
import ReactDOM from "react-dom";

let img = "https://picsum.photos/200";
const costumStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// customStyle.color = "yellow";

ReactDOM.render(
  <div>
    <h1 className="heading">Images </h1>
    {/* Inline styling for react elements */}
    <p style={costumStyle}>This is the image</p>
    <img src={img + "?grayscale"} alt="random image" />
  </div>,
  document.getElementById("root")
);
