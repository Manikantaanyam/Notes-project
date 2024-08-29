export function Notes({ notes }) {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{note.content}</p>
        </div>
      ))}
    </div>
  );
}
