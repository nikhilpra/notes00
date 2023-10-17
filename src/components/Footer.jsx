import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>NotesAPP @ {year}</p>
    </footer>
  );
}

export default Footer;
