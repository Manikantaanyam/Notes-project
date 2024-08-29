import { useState } from "react";

export function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateNote = () => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const json = await res.json();
      alert("note is created");
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <textarea
        name=""
        id="noteContent"
        placeholder="type content here"
        value={content}
        style={{ width: "50vw", height: "70vh" }}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <br />
      <br />
      <button
        onClick={() => {
          handleCreateNote();
        }}
      >
        create note
      </button>
    </div>
  );
}
