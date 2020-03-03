import React, { Component } from 'react'

class Remodelaciones extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const ID = [1, 2, 3];
        const Clientes = ['Dany', 'Pedro', 'José'];

        //key={Number.toString() para especificar bien el mapeo de datos.
        const NumID = ID.map((id) =>
            <tr key={ID.toString()}>{id}</tr>);

        const DatosClientes = Clientes.map((name) =>
            <tr key={Clientes.toString()}>{name}</tr>);
        return (
            <div>
                <div class="container">
                    <table className="table mt-1">
                        <thead className="thead-dark">
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
                                <td><button type="button" className="btn btn-danger">Editar</button></td>
                                <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Agregar
</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Alta de Remodelaciones</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" placeholder=" Ingrese su nombre... " />
                                        
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

            </div>

        )
    }
}

export default Remodelaciones