import React from 'react';
import './App.css';
import Avatar from "./avatar.jpeg";

class App extends React.Component{ //! class component
  render(){
    return(  //all the 'seudo-html' must be wrapped in a parent tag
      <React.Fragment>  
        
         <h1 className="title"> My first React app </h1>
         <img src={Avatar} alt="my img"/>
         <h1 id="important"> some text</h1>
        
      </React.Fragment>
    );
  }
}
export default App;


/**
 *  babel will convert react code into native Javascript
 * 
 */