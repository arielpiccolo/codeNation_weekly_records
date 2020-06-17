/**
 *  this.  (dot)  is only used in class component
 * when you want to update your state your need to use this.setState
 *  functions should be created as a arrow function.
 *  .map function only works on arrays
 *  
 */




import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    hungry:"Yes",
    dishes: ['pizza', 'fish&chips']
  }

  justEat = () => {
      this.setState( {
        hungry: "NO"
      })
  }

  //create variables here
  render(){
    console.log(this.state);

    const favFood = this.state.dishes.map( (food) => {
    return <h1>My Favorite food is {food}</h1>
    });





    // this is jsx
    return (
      <React.Fragment>
        <h1> Ariel</h1>
        <h2> Currently hungry? {this.state.hungry}</h2>
        <button onClick={this.justEat} >Eat</button>


      </React.Fragment>
    )
  }

}


export default App;
