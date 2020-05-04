import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import Usuarios from '../pages/Usuario'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {

        return (
            
                <div className="pos-f-t">

                    <nav className="navbar navbar-dark bg-success">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="nav-item mt+4">
                        <Link className="nav-link" to="/Notificaciónes">
                                <div className="fa fa-bell">
                                    <span className="badge badge-info">11</span>
                                </div>
                            </Link>
                        </div>
                        
                    </nav>


                    <div className="collapse " id="navbarToggleExternalContent">
                        <div className="bg-success p-4">
                            <div className="row">
                                <div className="col-3">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                        
                                        <Usuarios/>
                                        <div class="dropdown-divider"></div>
                                        
                                        <div className="btn-group">
                                            <Link className="btn btn-outline-light fa fa-home mt-1" to="/">Home <span className="sr-only">(current)</span></Link>
                                        </div>

                                        <div className="btn-group dropright ">
                                            <i class="fas fa-money-check-alt"></i>
                                            <button type="button" className="btn btn-outline-light mt-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Movimientos
  </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/Compras">Compras</Link>
                                                <Link className="dropdown-item" to="/Ventas">Ventas</Link>
                                            </div>
                                        </div>



                                        <div className="btn-group dropright">
                                            <i class="fas fa-cash-register"></i>
                                            <button type="button" class="btn btn-outline-light mt-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Catalogo
  </button>
                                            <div class="dropdown-menu">
                                                <Link className="dropdown-item" to="/Viviendas">Viviendas</Link>
                                                <Link className="dropdown-item" to="/Terrenos">Terrenos</Link>
                                                <Link className="dropdown-item" to="/Remodelaciones">Remodelaciones</Link>
                                                <Link className="dropdown-item" to="/Solares">Solares</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-9">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Header