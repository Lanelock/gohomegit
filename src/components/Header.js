import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler, MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from 'mdbreact';
import { Link } from 'react-router-dom';
import '../pages/css/BackgroundImagePage.css'



class Header extends Component {
  state = {
    collapse1: false,
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  render() {
    return (
      <MDBContainer >
        <MDBNavbar expand="md-4" fixed="top" style={{ marginTop: '10px' }} dark>
          <MDBContainer>
            <MDBNavbarBrand href='/Home'>
              GO HOME
                </MDBNavbarBrand>
            <Link className="ml-auto mr-3 " to="/Notificationtray">
              <ul class="navbar-nav nav-flex-icons">
                <li class="nav-item">
                  <a class="nav-link"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">Notificación</span></a>
                </li>
              </ul>
            </Link>
            <MDBHamburgerToggler color="white" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/Home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Movimientos</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <Link to="/ventas"><MDBDropdownItem tag="span">Ventas</MDBDropdownItem></Link>
                      <Link to="/compras"><MDBDropdownItem tag="span">Compras</MDBDropdownItem></Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Catalogo</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <Link to="/Terrenos"><MDBDropdownItem tag="span">Terrenos</MDBDropdownItem></Link>
                      <Link to="/Solares"><MDBDropdownItem tag="span">Solares</MDBDropdownItem></Link>
                      <Link to="/Viviendas"><MDBDropdownItem tag="span">Viviendas</MDBDropdownItem></Link>
                      <Link to="/Remodelaciones"><MDBDropdownItem tag="span">Remodelaciones</MDBDropdownItem></Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    )
  }
}

export default Header