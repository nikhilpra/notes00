import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <MDBFooter>
      <div className="text-center p-4 pb-1">
        <p style={{ color: "#d3d3d3" }}>NotesAPP @ {year}</p>
      </div>
    </MDBFooter>
  );
}

export default Footer;
