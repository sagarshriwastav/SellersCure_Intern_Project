import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'

const PhotoShoots = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Photo Shoots </span></h1>
          <p>
            The clarity of visible product features is quite evident in all our finished works as all of them are created keeping in mind all elements of product appeal.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_product_photography_91i2.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default PhotoShoots