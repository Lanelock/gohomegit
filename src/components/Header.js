import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Buy from '../pages/Movimientos/Buy'
import Sells from '../pages/Movimientos/Sells'
import Remodelaciones from '../pages/Catalogo/Remodelaciones'
import Solares from '../pages/Catalogo/Solares'
import Terrenos from '../pages/Catalogo/Terrenos'
import Viviendas from '../pages/Catalogo/Viviendas'
import Notificaciónes from '../pages/Notificaciónes'
import Usuarios from '../pages/Usuario'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {

        return (
            <Router>
                <div className="pos-f-t">

                    <nav className="navbar navbar-dark bg-success">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="nav-item mt+4">
                            <Link className="nav-link" to="/Notifiaciones">
                                <div className="fa fa-bell">
                                    <span className="badge badge-info">11</span>
                                </div>
                            </Link>
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
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
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/Compras" exact component={Buy} />
                            <Route path="/Ventas" exact component={Sells} />
                            <Route path="/Remodelaciones" exact component={Remodelaciones} />
                            <Route path="/Solares" exact component={Solares} />
                            <Route path="/Terrenos" exact component={Terrenos} />
                            <Route path="/Viviendas" exact component={Viviendas} />
                            <Route path="/Notifiaciones" exact component={Notificaciónes} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Header