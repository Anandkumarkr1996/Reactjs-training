import React, { Component } from 'react'
export default class Todolist extends Component {
    constructor() {
        super();

        this.state = {
            term: "",
            items: []
        }


    }
    changeHandler = (e) => {

        this.setState({
            term: e.target.value;
            items : [...olditems, items]
           
        })

    }

    buttonHandler = (e) => {
        e.preventDefault();
        this.setState({
            term: "",
            items: [...this.state.items, this.state.term]
            
        })
        console.log(this.setState.items)
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className='col-4'></div>
                    <div className='col-4 mt-5 bg-light'>
                        <input type="text m-2" className="bg-primary form-control" placeholder="Enter todo" value={this.state.term} onChange={this.changeHandler}></input>
                        <button className='btn btn-secondary m-3' value={this.state.items} onClick={this.buttonHandler}>Add ToDo</button>
                        <ul>
                            <li>{this.state.items}</li>
                        </ul>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        )
    }
}
