import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/Mangadiction-logo.png";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <Navbar className={`${styles.fontnav}`} fixed="top" bg="dark" variant="dark">
    <Container >
      <Navbar.Brand>
      <img className={styles.img} src={logo} alt="" /> Mangadiction
      </Navbar.Brand>

      <Nav>
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Tienda</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
      </Nav>
      
      <FontAwesomeIcon className={`${styles.icon}`} icon={ faCartShopping } />
    </Container>
  </Navbar>
  
  )
}

export default NavBar;