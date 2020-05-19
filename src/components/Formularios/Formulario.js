import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../../services/conexiones.axios'
import '../../pages/css/Buttons.css'
import '../../pages/css/cards.css'
class Formulario extends Component {

    state = {
        Nombre: '',
        Tipo: '',
        Dirección: '',
        Correo: '',
        Telefono: '',
        Descripción: '',
        Costo: '',
        editing: false,
        _id: ''
    }
    async componentDidMount() {
        const resp = await Axios.get('gohome/listarone/' + this.props.match.params.id);
        if (this.props.match.params.id) {

            this.setState({
                Nombre: resp.data.Nombre,
                Tipo: resp.data.Tipo,
                Dirección: resp.data.Dirección,
                Correo: resp.data.Correo,
                Telefono: resp.data.Telefono,
                Descripción: resp.data.Descripción,
                Costo: resp.data.Costo,
                editing: true,
                _id: this.props.match.params.id
            })


        }
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onInputChecked = e => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newVentas = {
            Nombre: this.state.Nombre,
            Tipo: this.state.Tipo,
            Dirección: this.state.Dirección,
            Correo: this.state.Correo,
            Telefono: this.state.Telefono,
            Descripción: this.state.Descripción,
            Costo: this.state.Costo


        }

        if (this.state.editing) {
            await Axios.put('gogome/actualizar/' + this.state._id, newVentas);
            window.location.href = '/';
        } else {
            await Axios.post('gohome/agregar', newVentas);
            this.setState({
                Nombre: '',
                Tipo: '',
                Dirección: '',
                Correo: '',
                Telefono: '',
                Descripción: '',
                Costo: ''
            });
        }


    }


    render() {

        return (
                <div className="card mt-5 container">
                    <h5 className="card-header">Alta ventas</h5>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Cliente</label>
                                <input type="text" className="form-control" name="Nombre" value={this.state.Nombre} onChange={this.onInputChange} placeholder="Ingrese el nombre..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Tipo de area</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Tipo" id="gridRadios1" checked={this.state.Tipo} onChange={this.onInputChecked} />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Vivienda
          </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Tipo" id="gridRadios2" checked={this.state.Tipo} onChange={this.onInputChecked} />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Terreno
          </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Tipo" id="gridRadios3" checked={this.state.Tipo} onChange={this.onInputChecked} />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Remodelacion
          </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Tipo" id="gridRadios4" checked={this.state.Tipo} onChange={this.onInputChecked} />
                                        <label className="form-check-label" htmlFor="gridRadios4">
                                            Solar
          </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Dirección</label>
                            <input type="text" className="form-control" name="Dirección" value={this.state.Dirección} onChange={this.onInputChange} placeholder="1234 Main St" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCorreo">Correo</label>
                            <input type="text" className="form-control" name="Correo" value={this.state.Correo} onChange={this.onInputChange} placeholder="correo@gmail.com" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTelefono">Telefono</label>
                            <input type="text" className="form-control" name="Telefono" value={this.state.Telefono} onChange={this.onInputChange} placeholder="000-000-000" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                            <textarea className="form-control" name="Descripción" value={this.state.Descripción} onChange={this.onInputChange} rows="3" placeholder="Ingrese breve descripción del area..."></textarea>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Costo</label>
                            <input type="email" className="form-control" name="Costo" value={this.state.Costo} onChange={this.onInputChange} placeholder="Ingrese el costo..." />
                        </div>
                        <Link to='/Ventas'>
                            <a className="btn-neon">
                                <span id="span1"></span>
                                <span id="span2"></span>
                                <span id="span3"></span>
                                <span id="span4"></span>
                                Cerrar
                    </a>
                        </Link>
                        <a className="btn-neon" onClick={this.onSubmit}>
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                            <span id="span4"></span>
                            Guardar
                    </a>
                    </div>
                </div>
        )
    }
}

export default Formulario