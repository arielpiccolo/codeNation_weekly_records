import React from 'react';
import './App.css';
import Avatar from "./avatar.jpeg";

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>
         <h1 className="title"> My first React app </h1>
         <img src={Avatar} alt="my img"/>
         <h1 id="important"> some text</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default App;