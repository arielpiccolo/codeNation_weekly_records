import React from 'react'

/**
 *  {props} is used to pass data to another file, and {props.whatever} to inject data from another file
 *  
 */

function Teams(props) {
    return (
        <div>
            <h2>Well done  {props.name} , you finished in {props.position} </h2>

        </div>
    )
}

export default Teams

