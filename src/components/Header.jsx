import React from "react";

import EditNoteIcon from "@mui/icons-material/EditNote";
function Header() {
  return (
    <header>
      <h1>
        <EditNoteIcon style={{ "font-size": "2rem" }} />
        Notes
      </h1>
    </header>
  );
}

export default Header;
