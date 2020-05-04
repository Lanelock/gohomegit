import React, { Component } from 'react'

class Buys extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id:'',
Nombre: '',
Tipo: '',
Direccion:'',
Correo:'',
Telefono:'',
Costo:''
        }

    }

    render() {
        return (
            <div>
                <form className="form-inline mt-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Buscar</button>
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
                                <th scope="col">Cancelación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <tr />
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" className="btn btn-success fa fa-align-left"></button></td>
                                <td></td>
                                <td><button type="button" className="btn btn-success fa fa-ban"></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Buys