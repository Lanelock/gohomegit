import React, { Component } from 'react'

class Remodelaciones extends Component {
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
                                <th scope="col">Comprar</th>
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
                                <td><button type="button" className="btn btn-danger fa fa-align-left"></button></td>
                                <td>$2500 MENSUALES</td>
                                <td><button type="button" className="btn btn-danger fa fa-">Comprar</button></td>
                            </tr>
                        </tbody>
                    </table>                    
                </div>
            </div>

        )
    }
}

export default Remodelaciones