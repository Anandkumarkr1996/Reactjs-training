import React from 'react'

function FuncComp(props) {
  return (
    <div>
        <h2>This is functional component</h2>
        <h2>This is a React Course of {props.time} months locaton is at {props.name}</h2>
        </div>
  )
}

export default FuncComp;
