import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Buy from '../pages/Movimientos/Buy'
import Sells from '../pages/Movimientos/Sells'
import Remodelaciones from '../pages/Catalogo/Remodelaciones'
import Solares from '../pages/Catalogo/Solares'
import Terrenos from '../pages/Catalogo/Terrenos'
import Viviendas from '../pages/Catalogo/Viviendas'
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <div className='Container-fluid'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">GO-HOME</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Movimientos
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/Compras">Compras</Link>
                                        <Link class="dropdown-item" to="/Ventas">Ventas</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Catalogo
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/Viviendas">Viviendas</Link>
                                        <Link class="dropdown-item" to="/Terrenos">Terrenos</Link>
                                        <Link class="dropdown-item" to="/Remodelaciones">Remodelaciones</Link>
                                        <Link class="dropdown-item" to="/Solares">Solares</Link>

                                    </div>
                                </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/Compras" exact component={Buy} />
                            <Route path="/Ventas" exact component={Sells} />
                            <Route path="/Remodelaciones" exact component={Remodelaciones} />
                            <Route path="/Solares" exact component={Solares} />
                            <Route path="/Terrenos" exact component={Terrenos} />
                            <Route path="/Viviendas" exact component={Viviendas} />
                        </Switch>
                    </div>
                </div>

            </Router>
        )
    }
}

export default Header