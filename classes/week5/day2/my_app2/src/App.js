import React, { Component } from 'react'
import Teams from './components/Teams'   //! 1 make sure you have importer  the file

/**
 *  whatever is in { name = } and {position = } will be passed on and injected into in this case Teams.js
 */

export default class App extends Component {
  render() {
    return (
      <div>

        <h1>League table</h1>
        <Teams name={'Man City'} position={1}/>                       

      </div>
    )
  }
}
