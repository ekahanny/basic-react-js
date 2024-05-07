import React from "react";

import Header from "./Header";
import Notes from "./Note";
import Footer from "./Footer";
import notes from "../../notes";

function App() {
  const noteList = notes.map((note) => (
    <Notes key={note.key} title={note.title} content={note.content} />
  ));
  return (
    <div>
      <Header />
      {noteList}
      <Footer />
    </div>
  );
}

export default App;
