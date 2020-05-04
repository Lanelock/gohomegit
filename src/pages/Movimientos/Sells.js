import React, { Component } from 'react'
import Formulario from '../../components/Formularios/Formulario'
import { Link } from 'react-router-dom'
class Sells extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: '',
            Nombre: '',
            Tipo: '',
            Dirección: '',
            Correo: '',
            Telefono: '',
            Descripción: '',
            Costo: ''
        }

    }


    render() {
        return (
            <div>
                <form className="form-inline mt-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Buscar</button>
                </form>
                <div>
                    <div class="container">
                        <table className="table table-sucess mt-2">
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
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
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
                                    <td><button  type="button" className="btn btn-success fa fa-pencil"></button></td>
                                    <td><button  type="button" className="btn btn-success fa fa-trash"></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button  type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                    Realizar nueva venta
</button>
                <div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Alta de ventas</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Formulario />

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button  type="button" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sells