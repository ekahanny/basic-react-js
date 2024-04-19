import React from "react";
import ReactDOM from "react-dom";

let img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Images </h1>
    <img src={img + "?grayscale"} alt="random image" />
  </div>,
  document.getElementById("root")
);
