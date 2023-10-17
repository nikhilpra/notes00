import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
function EditSection(props) {
  const [noteDetails, setNoteDetail] = useState({
    title: props.title,
    content: props.content,
    id: props.id,
  });

  function handleSubmit(event) {
    props.handlePatch(noteDetails.id, noteDetails.title, noteDetails.content);
    event.preventDefault();
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setNoteDetail((prevValue) => {
      if (name === "title") {
        return { ...prevValue, title: value };
      } else {
        return { ...prevValue, content: value };
      }
    });
  }

  return (
    <div className="editsection">
      <form className="edit-note">
        <input
          name="title"
          placeholder="Title"
          value={noteDetails.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          value={noteDetails.content}
          onChange={handleChange}
        />
        <button style={{ backgroundColor: "white" }} onClick={handleSubmit}>
          <DeleteIcon className="deleteIcon" />
        </button>
      </form>
    </div>
  );
}

export default EditSection;
