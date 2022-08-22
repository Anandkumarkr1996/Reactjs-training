import React from 'react'
import './styles.css'

function StyleComponent() {
    const Head={
        color:"orange",
        backgroundColor:"blue"
        
    }
  return (
    <div>
        <h2 style={{color:"red", backgroundColor:"green"}}>This is style component</h2>
        <h3 style={Head}>style with internal css</h3>
        <h1 class="headchild">This is class component</h1>
    </div>
  )
}

export default StyleComponent