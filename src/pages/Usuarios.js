import React from "react";
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBAnimation } from "mdbreact";

const Usuarios = () => {
    return (
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                BIENVENIDO, USUARIO
        </h2>
            <p className="lead white-text w-responsive text-center mx-auto mb-5">
              Puede realizar un movimiento o revisar el catálogo haciendo click sobre las siguientes opciones:
              
              <MDBAnimation
                        type="fadeInLeft"
                        delay=".3s"
                        className="white-text text-center text-md-left col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/ventas"><MDBBtn outline color="white">
                            VENTAS
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBAnimation
                        type="fadeInLeft"
                        delay=".3s"
                        className="white-text text-center text-md-left col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/compras"><MDBBtn outline color="white">
                            COMPRAS
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBAnimation
                        type="fadeInRight"
                        delay=".3s"
                        className="white-text text-center text-md-right col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/terrenos"><MDBBtn outline color="white">
                            TERRENOS
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBAnimation
                        type="fadeInRight"
                        delay=".3s"
                        className="white-text text-center text-md-right col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/solares"><MDBBtn outline color="white">
                            SOLARES
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBAnimation
                        type="fadeInRight"
                        delay=".3s"
                        className="white-text text-center text-md-right col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/viviendas"><MDBBtn outline color="white">
                            VIVIENDAS
                  </MDBBtn></Link>
                    </MDBAnimation>

                    <MDBAnimation
                        type="fadeInRight"
                        delay=".3s"
                        className="white-text text-center text-md-right col-md-8 mt-xl-8 mb-8"
                    >
              <Link to="/remodelaciones"><MDBBtn outline color="white">
                            REMODELACIONES
                  </MDBBtn></Link>
                    </MDBAnimation>
             
        </p>
        </section>
    );
}

export default Usuarios;