import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from './CardComponent'



const AboutUs = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >About Us </span></h1>
          <p>
            <b>Sellers Cure</b>  -The Business Developers is Business Developing Consultancy. We are providing services for E-Commerce Sellers, we lay the right foundation for accelerating sustainable top line growth and development for start-ups, small and mid-size and large-size business. Its Co-Founded by Mr. <b>Vinay Srivastav</b> , Mr. <b>Devender Dutt</b>  & Mr <b>Naresh Sharma</b> . They are belongs E-commerce Backgound more than <b>9 years</b> . Our experienced team professionals at Sellers Cure provides business consulting services to those Sellers who are either facing problems with their online marketplaces or despite of having a very well established offline business are struggling to establish a blooming online marketplace.
          </p>
          {/* <img style={{ width: "250px" }} src="/images/undraw_product_photography_91i2.svg" alt="" /> */}
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs