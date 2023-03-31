import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'


const DomainHostingServices = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Domain & Hosting Services</span></h1>
          <p>
            Sellers Cure The Business Developers is Business Developing Consultancy. We are providing services for E-Commerce Sellers, We lay the right foundation for accelerating sustainable top line growth and development for start-ups, small and mid-size and large-size business.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_cloud_hosting_7xb1.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default DomainHostingServices