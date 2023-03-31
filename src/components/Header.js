import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import Marquee from "react-fast-marquee";



const Header = () => {


  const common = {
    // marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  }


  return (
    <>
      <Marquee speed={180} gradientColor={[173, 216, 220]} >
        Sellers cure has been launched our own website www.shopperscliq.com
      </Marquee>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: 26 }}>Sellers Cure</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>

            <Nav>

              <Nav.Link href="/" style={common}>Home</Nav.Link>
              <NavDropdown style={common} title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/registration" >Registration</NavDropdown.Item>
                <NavDropdown.Item href="/cataloging">
                  Cataloging
                </NavDropdown.Item>
                <NavDropdown.Item href="/photoshoots">Photo Shoots</NavDropdown.Item>
                <NavDropdown.Item href="/increasesales">Increase Sales</NavDropdown.Item>
                <NavDropdown.Item href="/digitalmarketing">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="/paymentreconciliation">Payment Reconciliation</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown style={common} title="Software Solutions" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/webdevlopment">Web Devlopment</NavDropdown.Item>
                <NavDropdown.Item href="/mobileappdevelopment">Mobile App Development</NavDropdown.Item>
                <NavDropdown.Item href="/crm">CRM & ERP Services</NavDropdown.Item>
                <NavDropdown.Item href="/domainhosting">Domain & Hosting Services</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="/aboutus" style={common}>About Us</Nav.Link>
              <Nav.Link href="/gallery" style={common}>Gallery</Nav.Link>
              <Nav.Link href="/career" style={common}>Career</Nav.Link>



              <Nav.Link href="" className="text-decoration-none" target="_blank" rel="noreferrer" style={common} ><i className='fa-brands fa-twitter' ></i></Nav.Link>
              <Nav.Link href="" className="text-decoration-none" target="_blank" rel="noreferrer" style={common} ><i className='fa-brands fa-linkedin' ></i></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header