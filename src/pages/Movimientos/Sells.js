import React, { Component } from 'react'
import Formulario from '../../components/Formularios/Formulario'
class Sells extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const ID = [1];
        const Clientes = ['Leo'];

        //key={Number.toString() para especificar bien el mapeo de datos.
        const NumID = ID.map((id) =>
            <tr key={ID.toString()}>{id}</tr>);

        const DatosClientes = Clientes.map((name) =>
            <tr key={Clientes.toString()}>{name}</tr>);
        return (
            <div>
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
                                    <th scope="row">{NumID}</th>
                                    <td>{DatosClientes}</td>
                                    <td>Remodelacion</td>
                                    <td>Ave.Doc.Manuel Velazcos Suarez</td>
                                    <td>Leo.cm.04.07@gmail.com</td>
                                    <td>9161381271</td>
                                    <td><button type="button" className="btn btn-success fa fa-align-left"></button></td>
                                    <td>$2500 MENSUALES</td>
                                    <td><button type="button" className="btn btn-success fa fa-pencil"></button></td>
                                    <td><button type="button" className="btn btn-success fa fa-trash"></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
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
                                <div class="modal-body">
                                    <Formulario />

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar</button>
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