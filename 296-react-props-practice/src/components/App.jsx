import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const contactCard = contacts.map((contact, index) => (
    <Card
      key={index}
      name={contact.name}
      imgSrc={contact.imgURL}
      telp={contact.phone}
      email={contact.email}
    />
  ));
  return <div>{contactCard}</div>;
}

export default App;
