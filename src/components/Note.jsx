import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.handleEdit(props.id, props.title, props.content);
  }

  return (
    <div className="note" onDoubleClick={handleEdit}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{ backgroundColor: "white" }} onClick={handleClick}>
        <DeleteIcon className="deleteIcon" />
      </button>
    </div>
  );
}

export default Note;
