import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../../services/conexiones.axios'
import '../../pages/css/Buttons.css'
import '../../pages/css/cards.css'
import '../../pages/css/FormUsser.css'
import { MDBCol, MDBRow, MDBInput, MDBCardBody } from 'mdbreact';

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

            <MDBCol md="6">
                <form>
                    <div className="card">
                    <div className="header pt-3 purple-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Registro
                </h3>
              </MDBRow>
            </div>
            
                     
                        <MDBCardBody>
                                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                    success="right" className="white-text" />
                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" className="white-text"/>
                                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                                    error="wrong" success="right" className="white-text"/>
                                <MDBInput label="Your password" icon="lock" group type="password" validate className="white-text"/>
                                
                            <div className="text-center">
                                <Link to='/' >
                                    <a className="btn-neon" onClick={this.onSubmit}>
                                        <span id="span1"></span>
                                        <span id="span2"></span>
                                        <span id="span3"></span>
                                        <span id="span4"></span>
                            Registrar
                    </a>
                                </Link>
                            </div>
                            
                            <hr className='hr-light' />
                            <p className="font-small white-text d-flex justify-content-center">
                                Ya tienes cuenta?
        <Link to="/" className="ml-1">Inicia sesion</Link>
                            </p>
                            </MDBCardBody>
                        
                        
                    </div>
                </form>
            </MDBCol>

        )
    }
}

export default Formulario