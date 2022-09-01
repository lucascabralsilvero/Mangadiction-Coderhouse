import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../assets/img/Mangadiction-logo.png";
import CartWidget from './CartWidget';
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";


const NavBar = () =>
{
  return (
    <Navbar className={styles.fontnav} fixed="top" bg="dark" variant="dark">
      <Container fluid className={`  d-flex justify-content-around ${styles.marginbrand}`} >
        <Link className='text-decoration-none text-white fs-5' to="/" >
          <img className={styles.img} src={logo} alt="" /> Mangadiction
        </Link>
        <Nav>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="categorias/Seinen" className='nav-link'>Seinen</Link>
          <Link to="categorias/Spokon" className='nav-link'>Spokon</Link>
          <Link to="categorias/Shounen" className='nav-link'>Shounen</Link>
          
          
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;