import React, { Component } from 'react'

export class ClassComp extends Component {
  constructor(props){
    super(props)

    this.state = {
        count : 1
    }
    function decrement() {

      this.setState({count:this.state.count - 1})
      
    }
  }
  render() {
    return (
      <div>
        <h2> Counter {this.state.count}</h2>
        <button onClick={()=>{(this.setState({count:this.state.count + 1}))}}>add</button>
        <button onClick={()=>{(this.setState({count:this.state.count - 1}))}}>del</button>
      </div>
    )
  }
}

export default ClassComp