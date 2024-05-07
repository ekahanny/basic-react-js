import React from "react";
import "../../public/styles.css";

function Notes(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Notes;
