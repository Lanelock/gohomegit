import React, { Component } from 'react'


class Usuario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
            <form className="form-inline my-2 my-lg-0">
                <div>
                    <img src="./logo.svg" className="rounded-circle float-left mt-5" alt="Usuario" />
                </div>

                
          
            
            </form>
                <hr />
                <button type="button" className="btn btn-outline-light fas fa-users mt-5"></button>
            </div>
        )
    }
}

export default Usuario