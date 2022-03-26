import React from 'react'
import { Row, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../../assets/images/ex-gg-logo.png'
import './style.css'
import PhotoCarousel from '../Carousel'

const Header = () => {
  return (
    <div className='container-fluid p-0'>
      <Navbar collapseOnSelect expand="lg" fixed="top" defaultActiveKey="/home" className='d-flex flex-column w-100'>
        <div className='d-flex justify-content-between align-items-center w-100 px-3'>
          <a class="navbar-brand title d-flex align-items-center" href="/" id="brand-icon">
            <img src={Logo} id="header-leaf" />
            <Nav.Link href="/">Home</Nav.Link>
          </a>
          
          <div className='d-flex align-items-center'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href="volunteer">Volunteer</Nav.Link>
              <Nav.Link href="donate">Donate</Nav.Link>
              <Nav.Link href="data">Harvest Data</Nav.Link>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/tools">Tool Library</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Local Resources</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Historical Donors</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Photo Gallery</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </div>
        </div>
        <Row md={1} fixed="top" >
          <PhotoCarousel />
        </Row>
      </Navbar>


    </div>
  )
}

export default Header