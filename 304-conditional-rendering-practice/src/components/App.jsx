import React from "react";
import Login from "./Login";
import Register from "./Register";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
