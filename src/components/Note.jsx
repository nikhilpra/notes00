import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.handleEdit(props.id, props.title, props.content);
  }

  return (
    <MDBCol className="contain mb-0">
      <MDBCard>
        <MDBCardBody className="p-3 pb-1 newnote" onDoubleClick={handleEdit}>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>{props.content}</MDBCardText>
          <button class="button" onClick={handleClick}>
            <DeleteIcon className="deleteIcon" />
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
