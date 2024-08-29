import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateNote } from "./components/CreateNote";
import { Notes } from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notes").then(async (res) => {
      const response = await res.json();
      setNotes(response.data);
    });
  }, []);

  return (
    <>
      <CreateNote />
      <Notes notes={notes} />
    </>
  );
}

export default App;
