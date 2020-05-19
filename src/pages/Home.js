import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Home = () => {
    return (
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                QUE ES GO HOME?
        </h2>
            <p className="lead white-text w-responsive text-center mx-auto mb-5">
                Es una empresa dedicada a la venta de inmuebles, dende el comprador podrá
                el tipo de casa también podrá ver en la ubicación en la que se encontrará,
                asegurando un trato cordial y seguro con el vendedor.
        </p>

            <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img
                        className="img-fluid"
                        src="http://clipart-library.com/image_gallery2/Home-High-Quality-PNG.png"
                        alt=""
                    />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Safety</h5>
                            <p className="white-text">
                                Nosotros protegeremos tu seguridad, todos tus datos estarán seguro nadie
                                podrá hacer uso de ellos, y los tratos estarán seguros por la empresa
                                brindado les mayor seguridad a nuestros clientes.
                                </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Technology</h5>
                            <p className="white-text">
                                Nuestra empresa es la única en el momento que maneja un software para la
                                venta de casas con los vendedores, haciendo esto mas practico al cliente
                                sin necesidad de salir de casa pueda hacer su compra
                </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Finance</h5>
                            <p className="white-text">
                                • Todas las compras serán seguras a si ayudando al cliente evitar estafas.
                                </p>
                            <p className="white-text">
                                • La recaudación de la empresa el 12% será destinadas a hospitales.

                </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Home;