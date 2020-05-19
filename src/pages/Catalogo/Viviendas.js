import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';
class Viviendas extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <form className="form-inline mt-3 container">
                    <MDBInput className="text-white" label="Search" size="lg" />
                </form>
                <div class="container">
                    <table className="table table-sucess mt-1">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Comprar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <a href="" className="btn-neon  fa fa-align-left  ">
                                        <span id="span1"></span>
                                        <span id="span2"></span>
                                        <span id="span3"></span>
                                        <span id="span4"></span>
                                    </a>
                                </td>
                                <td></td>
                                <td>
                                    <a href="" className="btn-neon  fas fa-shopping-cart">
                                        <span id="span1"></span>
                                        <span id="span2"></span>
                                        <span id="span3"></span>
                                        <span id="span4"></span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Viviendas