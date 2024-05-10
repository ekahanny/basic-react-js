// State & Hooks

/*
Hooks : special functions that are only
available when react is rendering. 

State : one of hooks feature which hold 
component specific memory
*/

// import useState to use a state variable (1)
import React, { useState } from "react";

function App() {
  // count : state variable, setCount: setter function, 0: initial value (2, 3)
  const [count, setCount] = useState(0);

  // (5)
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* (4) */}
      <h1>{count}</h1>

      {/* (6) */}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

/*

1. state berasal dari useState hook yg disediakan oleh react module
2. menginisialisasi initial value dalam useState bernilai 0
3. initial value digunakan pada count selaku state variable
4. untuk menampilkan nilai dari count, tampilkan count pada h1
5. trigger setCount selaku func yg berguna utk mengupdate value dari count
6. ketika user mengklik btn, panggil func yang berisi seCount utk mengupdate nilai count

*/
