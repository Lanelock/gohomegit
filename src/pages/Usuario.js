import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Usuario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <div>
                    <img src="./logo.svg" class="rounded-circle float-left mt-5" alt="Usuario" />
                </div>
            <div >                   
                <button type="button" class="btn btn-outline-light fas fa-users mt-5"></button>
            </div>
            
            </form>
        )
    }
}

export default Usuario