import React, { useState } from "react";

function App() {
  setInterval(updateTime, 100);

  const getTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(getTime);

  function updateTime() {
    const getUpdate = new Date().toLocaleTimeString();
    setTime(getUpdate);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
