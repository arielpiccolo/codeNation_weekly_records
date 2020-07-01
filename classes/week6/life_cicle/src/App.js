//! the react life-cycle in a nutshell

import React from 'react';
import './App.css';

//this is the original way to declare and initiate state in rect
//! if there were all this options active, the constructor will load first
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ariel"
    }
    console.log("Inside of the Constructor");
  }


  //! and finally componentDidMount will load after everything has been loaded
  componentDidMount = () => {
    console.log("Inside component did mount")
  }


  //this is a more modern way to declare and initiate state in react and the more commonly used.
  //! then the render will load, or first in case that there is no constructor
  changeName = () => {
    this.setState({
      name: "John"
    })
  }


  //the render will the execute every time there is change in the state
  render() {
    console.log("inside of the render");
    return (
      <React.Fragment>

        {/* the code bellow will return the state of name as it has been set above at the state declaration = Ariel  */}
        {/* after that will, when the button is clicked, change the name to was set above in changeName variable */}

        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
      </React.Fragment>
    )
  }
}
export default App;