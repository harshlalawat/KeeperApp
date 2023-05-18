import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function handleAdd(object) {
    setNote((preValue) => {
      return [...preValue, { title: object.title, content: object.content }];
    });
  }

  function delNote(id) {
    setNote((preValue) => {
      return note.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleAdd={handleAdd} />
      {note.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            delNote={delNote}
            title={element.title}
            content={element.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
