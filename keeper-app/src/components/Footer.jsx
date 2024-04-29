import React from "react";
import "../../public/styles.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright &copy; {year} </p>
    </footer>
  );
}

export default Footer;
