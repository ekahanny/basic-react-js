import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* Pada component form, dibuat props utk mengambil nilai dari userIsRegistered  */}
      <Form isRegister={userIsRegistered} />
    </div>
  );
}

export default App;
