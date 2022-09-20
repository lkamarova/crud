import { deleteNotes } from "../api";

const Note = ({ content, onNoteDeleted, idNote }) => {
  const handleDetete = () => {
    deleteNotes(idNote).then(() => {
      onNoteDeleted();
    });
  };

  return (
    <div className="noteStyle">
      <div className="note">
        <div>{content}</div>
      </div>
      <span onClick={handleDetete} className="material-icons">
        close
      </span>
    </div>
  );
};

export default Note;
