import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {

  const year = new Date().getFullYear()


  return (

    <>

      <footer>
        <Container fluid>
          <Row className='mt-5 bg-primary text-white pt-5' >
            <Col md={5} className='' >
              <h4>About Us</h4>
              <p>Sellers Cure The Business Developers is Business Developing Consultancy. We are providing services for E-Commerce Sellers, We lay the right foundation for accelerating sustainable top line growth and development for start-ups, small and mid-size and large-size business. </p>
              <p>
                <i className='fa-brands fa-facebook' ></i>
                <i className='fa-brands fa-google-plus-g mx-3' ></i>
              </p>
            </Col>
            <Col md={2} className='' >
              <h4>Services</h4>
              <p> <a href="/digitalmarketing" style={{ color: "white", textDecoration: "none" }}>Digital Marketing</a> </p>
              <p> <a href="/increasesales" style={{ color: "white", textDecoration: "none" }}>Increase Sales</a> </p>
              <p> <a href="/paymentreconciliation" style={{ color: "white", textDecoration: "none" }}>Payment Reconciliation</a> </p>
              <p> <a href="/photoshoots" style={{ color: "white", textDecoration: "none" }}>Photo Shoots</a> </p>
            </Col>
            <Col md={5} className='' >
              <h4>Contact Info</h4>
              <p>Plot No. 273 Second Floor, Street No 7, in front of Rao Ganga Ram Public school (Beside- Park Blue Hotel) Kapashera New delhi- 110037</p>
              <p> <i className='fa fa-phone'  ></i> 011-40254559, +918800274978, +91 8800774166</p>
              <p> <i className='fa-solid fa-envelope'></i> info@sellerscure.com</p>
              <p  >
                <a href="https://github.com/sagarshriwastav?tab=repositories"  >
                  <i className='fa-brands fa-github'></i>
                </a>
                <a href="https://www.instagram.com/_sagar.shriwastav/" target="_blank" rel="noreferrer" >
                  <i className='fa-brands fa-instagram mx-3' ></i>
                </a>
                <a href="https://www.facebook.com/sagarkumar.shriwastav" target="_blank" rel="noreferrer">
                  <i className='fa-brands fa-facebook' ></i>
                </a>
              </p>
            </Col>

          </Row>
          <Row className='bg-dark text-white'>
            <p className='d-flex justify-content-center pt-3' >© Copyright {year}. All Rights Reserved. Powered by <b> &nbsp;SellersCure</b> . Developed by  <b> &nbsp; Satrughan Srivastava </b> </p>
          </Row>
        </Container>

      </footer>

      {/* <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">

          </div>
          <div className="second mt-5">

          </div>
          <div className="third mt-5">

          </div>
        </div>
      </div> */}
    </>
  )
}

export default Footer