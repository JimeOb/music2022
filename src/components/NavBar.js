import React, { Component } from 'react'
import {Navbar,Container} from 'react-bootstrap';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Los mejores carros del año 2022
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    )
  }
}

