import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/logo/logo-white.png';

function Homepage() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row bg-secondary'>
                    <div className='col-3'><img src={logo} alt="logo" ></img></div>
                    <div className='col-9 mt-3'>
                        <ul class="nav ">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" to="/pagination" >pagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/ContactUs">contactus</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/Todolist">Todolist</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/Counter">CounterFuncComp</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/TodoListFunc">TODO-Func-comp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage