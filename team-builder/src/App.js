import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Users from './components/Content';

function App() {
  const [info, setInfo] = useState([
    {
      id: 1,
      username: 'Robert Mitchell',
      email: 'robert.judson@outlook.com',
      role: 'Full-Stack Developer'
    }
  ]);
  const addNewInfo = user => {
    const newUser = {
      id: Date.now(),
      username: user.username,
      email: user.email,
      role: user.role
    }
    setInfo([...info, newUser]);
  }


  return (
    <div className="App">
      <Form addNewInfo={addNewInfo}/>
      <Users info={info}/>
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Notes from "./components/Notes";
// import NoteForm from "./components/NoteForm";
// import "./styles.scss";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Happy little quote",
//       body:
//         "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
//     }
//   ]);
//   const addNewNote = note => {
//     const newNote = {
//       id: Date.now(),
//       title: note.title,
//       body: note.body
//     };
//     setNotes([...notes, newNote]);
//   };
//   return (
//     <div className="App">
//       <h1>My Notes</h1>
//       <NoteForm addNewNote={addNewNote} />
//       <Notes notes={notes} />
//     </div>
//   );
// }
