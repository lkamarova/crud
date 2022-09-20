import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { fetchNotes } from "../api";
import Note from "./Note";
import NotesForm from "./NotesForm";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    fetchNotes()
      .then((res) => {
        setNotes(res);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div className="notesWrap">
      <span onClick={update} className="material-icons">
        update
      </span>
      <h1>Notes</h1>

      {!isLoaded && <div>loading...</div>}

      <div className="noteWrap">
        {notes?.map((note) => (
          <Note
            key={v4()}
            content={note.content}
            idNote={note.id}
            onNoteDeleted={update}
          />
        ))}
      </div>
      <NotesForm notes={notes} onNoteAdded={update} />
    </div>
  );
};

export default Notes;
