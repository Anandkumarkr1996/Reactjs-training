import React, { Component } from 'react'

class ContactUs extends Component {

    state = {
        firstName : "",
        lastName : "",
        password : "",
        email : ""
    }
    handleChange = (e)=>{
        console.log(e.target.value)
    }

    buttonHandler = (e)=>{
        e.preventDefault()
        console.log("submitted")
    }

    render() {
       

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.buttonHandler}>
                            <input  onChange={this.handleChange} name="firstName" type="text" value={this.state.firstName}className="form-control mb-3 mt-3" placeholder="Enter your first name" />
                            <input onChange={this.handleChange}  name="lastName" type="text" className="form-control mb-3" placeholder="Enter your Last name" />
                            <input  onChange={this.handleChange}  name="password" type="password" className="form-control mb-3" placeholder="Password" />
                            <input onChange={this.handleChange}  name="email" type="email" className="form-control mb-3" placeholder="Enter your Email ID" />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default ContactUs