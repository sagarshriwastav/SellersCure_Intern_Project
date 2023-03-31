import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from './CardComponent'


const Gallery = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Gallery</span></h1> <br /><br />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Gallery