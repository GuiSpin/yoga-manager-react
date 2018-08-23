import React, { Component } from 'react';
import {Nav, Navbar, MenuItem, NavItem, NavDropdown} from 'react-bootstrap'

class MainNav extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Yoga Manager</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Cadastrar Aluno
              </NavItem>
              
              <NavDropdown eventKey={3} title="Gerenciar Aulas" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Criar Aula</MenuItem>
                <MenuItem eventKey={3.2}>Controlar Presenca</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Ver Aulas Realizadas</MenuItem>
              </NavDropdown>
            </Nav>
          
          </Navbar.Collapse>
        </Navbar>
        )
    }
  } 

  export default MainNav