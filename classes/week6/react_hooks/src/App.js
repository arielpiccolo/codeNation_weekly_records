import React, { useState } from 'react';  //!useState needs to be imported
import './App.css';

//functional component 

//! variable must start with const on functional components
//! on functional components one can have multiple states



function App() {

  const [name, setName] = useState("Telmo");
  const [contacts, setContacts] = useState([
    "John", "Adam", "David"
  ])


  const addName = () => {
    setContacts(
      [...contacts, "Telmo"]
    )
  }

  const allContacts = contacts.map((name) => {
    return <h1>{name}</h1>
  })


  return (
    <React.Fragment>
      {allContacts}
      <button onClick={addName}>Add Name</button>
    </React.Fragment>
  )
}
export default App;




//! we are not using this.Name because it is a functional component no a class component!
