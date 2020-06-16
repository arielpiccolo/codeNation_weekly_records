/**
*    rcc
*    rfce	
*/

import React, { Component } from 'react'
import People from './components/People'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Members of the Club</h1>
        <People name={'Ariel, '} last={'Piccolo'} />
        <People name={'Ariel, '} last={'Piccolo'} />
        <People name={'Ariel, '} last={'Piccolo'} />
      </div>
    )
  }
}

