import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((previousVal) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: previousVal.lastName,
        };
      } else if (name === "LName") {
        return {
          firstName: previousVal.firstName,
          lastName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          name="LName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
