import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Axios from '../../services/conexiones.axios'
import { MDBInput } from 'mdbreact';

import '../css/Buttons.css'
class Sells extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Ventas: []
        }
        this.getventas.bind(this);

    }
    componentDidMount() {
        this.getventas();
    }

    getventas = async () => {
        await Axios.get('gohome/listar')
            .then(res => {
                this.setState({ Ventas: res.data });
            }).catch((error) => {
                console.log(error);
            })
    }

    delventas = async (id) => {
        await Axios.delete('gohome/eliminar/' + id)
        this.getventas();
    }
    render() {
        return (

            <div className="container">
                <form className="form-inline container">
                    <Link to='/Formulario' className="mr-sm-5">
                        <a className="btn-neon">
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                            <span id="span4"></span>
                            Realizar nueva venta
                    </a>
                    </Link>
                    <MDBInput className="text-white" label="Buscar" size="lg" />

                </form>
                <div>
                    <div className="container">
                        <table className="table table-sucess mt-2">

                            <thead className="thead-light">
                                <tr>
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
                                {
                                    this.state.Ventas.map(ventas =>
                                        <tr key={ventas._id}>
                                            <th>{ventas.Nombre}</th>
                                            <th>{ventas.Tipo}</th>
                                            <th>{ventas.Dirección}</th>
                                            <th>{ventas.Correo}</th>
                                            <th>{ventas.Telefono}</th>
                                            <th><button type="button" className="btn btn-success fa fa-align-left">{ventas.Descripción}</button></th>
                                            <th>{ventas.Costo}</th>
                                            <th><Link role="button" className="btn btn-success fa fa-pencil" to={"/editar/" + ventas._id}></Link></th>
                                            <th><button type="button" className="btn btn-success fa fa-trash" 
                                            onClick={() => this.delventas(ventas._id)}></button></th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        )
    }
}

export default Sells