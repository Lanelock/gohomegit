import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

class Notificationtray extends Component {
  render() {
    return (
        <MDBContainer className="mt-3">
        <MDBNotification
        show
        fade
        icon="envelope"
        iconClassName="green-text"
        title="Se realizo una Compra"
        message="Realizastes una compra del usuario:____"
        text="just now"
      />
      <MDBNotification
        show
        fade
        icon="envelope"
        iconClassName="yellow-text"
        title="Se realizo una adquisicion"
        message="Se realizo una adquisicion del usuario:_____ del catalogo:_____"
        text="just now"
      />
      <MDBNotification
        show
        fade
        icon="envelope"
        iconClassName="blue-text"
        title="Se realizo un registro"
        message="Se realizo una registro de ventas del usuario:____"
        text="just now"
      />
      </MDBContainer>
    );
  }
}

export default Notificationtray;