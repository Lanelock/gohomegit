import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
import "./pages/css/BackgroundImagePage.css";

import Header from "./components/Header";

import Home from './pages/Home'
import Buy from './pages/Movimientos/Buy'
import Sells from './pages/Movimientos/Sells'
import Remodelaciones from './pages/Catalogo/Remodelaciones'
import Solares from './pages/Catalogo/Solares'
import Terrenos from './pages/Catalogo/Terrenos'
import Viviendas from './pages/Catalogo/Viviendas'
import Notificationtray from './pages/Notificationtray'
import Formulario from './components/Formularios/Formulario'
import Ussers from './components/Ussers'
import FormUsser from './components/Formularios/FormUsser'
class App extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
    );
    return (
      <div id="videobackground">
        <MDBView>
          <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
            autoPlay muted="" loop>
            <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
          </video>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <Router>
              <div>
                <Header />

                {this.state.collapseID && overlay}
              </div>
              <Route path="/" exact component={Ussers} />
              <Route path="/Home" exact component={Home} />
              <Route path="/FormUsser" exact component={FormUsser} />
              <Route path="/Compras" exact component={Buy} />
              <Route path="/Ventas" exact component={Sells} />
              <Route path="/Remodelaciones" exact component={Remodelaciones} />
              <Route path="/Solares" exact component={Solares} />
              <Route path="/Terrenos" exact component={Terrenos} />
              <Route path="/Viviendas" exact component={Viviendas} />
              <Route path="/Notificationtray" exact component={Notificationtray} />
              <Route path="/Formulario" exact component={Formulario} />
              <Route path="/editar/:id" exact component={Formulario} />
            </Router>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default App;