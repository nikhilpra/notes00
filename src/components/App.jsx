import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import EditSection from "./EditSection";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [notes, setNotes] = useState([]);
  const [itemClicked, setItemClicked] = useState(false);
  const [noteDetail, setNoteDetail] = useState({
    eid: "",
    title: "",
    content: "",
  });
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addNote(newNote) {
    console.log(newNote);
    axios
      .post("http://127.0.0.1:3001/", newNote)
      .then(function (response) {
        /*  console.log(response); */
        setNotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteNote(id) {
    axios
      .delete(
        "http://127.0.0.1:3001/",

        {
          data: {
            id: id,
          },
        }
      )
      .then((res) => {
        /* console.log(res); */
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleEdit(id, title, content) {
    setItemClicked(true);

    setNoteDetail((prevValue) => {
      return { eid: id, title: title, content: content };
    });
  }

  function handlePatch(id, title, content) {
    //console.log(id);
    //console.log(title);
    //console.log(content);

    axios
      .put("http://127.0.0.1:3001/", {
        id: id,
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);

        setNotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      setItemClicked(false);
    }, 100);
  }

  return (
    <div>
      <Header />

      {itemClicked ? (
        <EditSection
          id={noteDetail.eid}
          title={noteDetail.title}
          content={noteDetail.content}
          handlePatch={handlePatch}
        />
      ) : (
        <>
          <CreateArea onAdd={addNote} />
          <Container>
            <Row>
              {notes.map((noteItem, index) => {
                return (
                  <Col sm={4}>
                    <Note
                      key={index}
                      id={noteItem._id}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                      handleEdit={handleEdit}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
