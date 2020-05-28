import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBAnimation } from "mdbreact";
import { Link } from 'react-router-dom';

class Ussers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBAnimation
                        type="fadeInLeft"
                        delay=".3s"
                        className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                    >
                        <h1 className="h1-responsive font-weight-bold">
                            ¡Registrate ahora!
                  </h1>
                        <hr className="hr-light" />
                        <h6 className="mb-4">
                            Empieza a adquirir viviendas y ofrecer servicios
                            de remodelacion todo a un precio favorable.
                  </h6>
                        <Link to="/Home"><MDBBtn outline color="white">
                            Mas informacion
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBCol md="6" xl="5" className="mb-4">
                        <MDBAnimation type="fadeInRight" delay=".3s">
                            <form>

                                <MDBCardBody className="white-text">
                                    <div className="card">
                                        <div className="header pt-3 purple-gradient">
                                            <MDBRow className="d-flex justify-content-center">
                                                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                                                    <MDBIcon icon="user" /> INICIAR SESIÓN
                        </h3>
                                            </MDBRow>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <hr className="hr-light" />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Introduce tu nombre"
                                            icon="user"
                                        />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Introduce tu contraseña"
                                            icon="lock"
                                            type="password"
                                        />
                                        <div className="text-center mt-4 ">
                                            <Link to='/Usuarios' >
                                                <a className="btn-neon">
                                                    <span id="span1"></span>
                                                    <span id="span2"></span>
                                                    <span id="span3"></span>
                                                    <span id="span4"></span>
                            Iniciar sesion
                    </a>
                                            </Link>
                                        </div>
                                        <hr className='hr-light' />
                                        <p className="font-small white-text d-flex justify-content-center">
                                            ¿No tienes cuenta?
        <Link to="/FormUsser" className="ml-1">Registrate</Link>
                                        </p>
                                    </div>
                                </MDBCardBody>

                            </form>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Ussers