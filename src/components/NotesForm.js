import { useState } from "react";
import { v4 } from "uuid";
import { addNotes } from "../api";

const NotesForm = ({ onNoteAdded }) => {
  const [dataForm, setDataForm] = useState('');

  const handleChange = ({ value }) => {
    setDataForm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: v4(),
      content: dataForm,
    };
    addNotes(data).then(() => {
      onNoteAdded(data);
      setDataForm('');
    });
  };

  return (
    <div className="notesFormWrap">
      <form id="notesForm" onSubmit={handleSubmit}>
        <textarea
          form="notesForm"
          onChange={(ev) => handleChange(ev.target)}
          placeholder="content"
          name="content"
          id="textarea"
          cols="35"
          wrap="soft"
          rows="5"
          value={dataForm}
        ></textarea>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default NotesForm;
