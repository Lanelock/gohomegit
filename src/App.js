import React from 'react';
import Header from './components/Header';


import Home from './pages/Home'
import Buy from './pages/Movimientos/Buy'
import Sells from './pages/Movimientos/Sells'
import Remodelaciones from './pages/Catalogo/Remodelaciones'
import Solares from './pages/Catalogo/Solares'
import Terrenos from './pages/Catalogo/Terrenos'
import Viviendas from './pages/Catalogo/Viviendas'
import Notificaciónes from './pages/Notificaciónes'
import Formulario from './components/Formularios/Formulario'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="container-fluid mt-3">
      <Header /> 
        <Route path="/" exact component={Home} />
        <Route path="/Compras" exact component={Buy} />
        <Route path="/Ventas" exact component={Sells} />
        <Route path="/Remodelaciones" exact component={Remodelaciones} />
        <Route path="/Solares" exact component={Solares} />
        <Route path="/Terrenos" exact component={Terrenos} />
        <Route path="/Viviendas" exact component={Viviendas} />
        <Route path="/Notificaciónes" exact component={Notificaciónes} />
        <Route path="/Formulario" exact component={Formulario} />

    </div>
    </Router>
  );
}

export default App;
