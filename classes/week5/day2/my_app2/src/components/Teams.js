import React from 'react'


function People(props) {
    return (
        <div>
            <h2>People names are:{props.name} {props.last}</h2>    
        </div>
    )
}

export default People

