import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'



const DigitalMarketing = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Digital Marketing</span></h1>
          <p>
          Our digital marketing services are geared to one key purpose: acquiring and retaining new customers quickly and cost-effectively. We will constantly improve your online store, reduce your marketing spend, and optimize selling costs. During the planning phase, we will devise strategies and measures that are ready to be implemented as soon as the store goes live.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_social_media_re_sulg.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default DigitalMarketing