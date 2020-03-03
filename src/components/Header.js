import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Buy from '../pages/Movimientos/Buy'
import Sells from '../pages/Movimientos/Sells'
import Remodelaciones from '../pages/Catalogo/Remodelaciones'
import Solares from '../pages/Catalogo/Solares'
import Terrenos from '../pages/Catalogo/Terrenos'
import Viviendas from '../pages/Catalogo/Viviendas' 
import Notificaciónes from '../pages/Notificaciónes' 

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
  
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
                    <div className="nav-item mt+4">
                        <Link className="nav-link" to="#">
                            <div className="fa fa-bell">
                                <span className="badge badge-info">11</span>
                            </div>
                            Notificación
        </Link>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
  </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <div className="row">
                            <div className="col-3">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="/" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                                    
                                        <div class="btn-group dropright">
                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Movimientos
  </button>
                                            <div class="dropdown-menu">
                                                <Link className="dropdown-item" to="/Compras">Compras</Link>
                                                <Link class="dropdown-item" to="/Ventas">Ventas</Link>   
  </div>
                                        </div>

    

                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Catalogo</a>
                                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
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