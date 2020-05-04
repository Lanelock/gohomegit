import React, { Component } from 'react'

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: '',
            Nombre: '',
            Tipo: '',
            Dirección: '',
            Correo: '',
            Telefono: '',
            Costo: ''
        }
 
    }

    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputName">Cliente</label>
                        <input  type="name" class="form-control" id="inputName" placeholder="Ingrese el nombre..." />
                    </div>
                </div>
                <div>
                    <label for="inputTipo">Tipo</label>
                    <div class="form-check">
                        <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Remodelación
  </label>
                    </div>
                    <div class="form-check">
                        <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Terrenos
  </label>
                    </div>
                    <div class="form-check">
                        <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Solares
  </label>
                    </div>
                    <div class="form-check">
                        <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Viviendas
  </label>
                    </div>
                </div>       
                <div class="form-group">
                    <label for="inputAddress">Dirección</label>
                    <input  type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="form-group">
                    <label for="inputCorreo">Correo</label>
                    <input  type="text" class="form-control" id="inputCorreo" placeholder="correo@gmail.com" />
                </div>
                <div class="form-group">
                    <label for="inputTelefono">Telefono</label>
                    <input  type="text" class="form-control" id="inputTelefono" placeholder="000-000-000" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripción</label>
                    <textarea  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Costo</label>
                    <input  type="email" class="form-control" id="inputEmail4" placeholder="Ingrese el costo..." />
                </div>
            </form>
        )
    }
}

export default Formulario