import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from '../CardComponent'

const Registration = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8} >
          <h1 style={{ color: "#6c63ff" }} >Registration</h1>
          <p>
            We trust in providing best services to you by quick registration of your brand on almost all the promising websites including Amazon, Snapdeal, Flipkart, Shopclues, Myntra, Jabong, Limeroad, Papperfry, voonik, Homepunch, Wydr, Tata cliq etc. We will handle the registration process on all marketplaces according to the guidelines provided by them & also handle the process of brand approval to provide a unique name to your brand.
          </p>
          <img style={{ width: "250px" }} src="/images/work_time_registration.svg" alt="" />
        </Col>
        <Col md={4} >
          <CardComponent></CardComponent>
        </Col>
      </Row>
    </Container>
  )
}

export default Registration