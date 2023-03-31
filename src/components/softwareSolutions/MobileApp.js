import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'


const MobileApp = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Mobile App</span></h1>
          <p>
            SellersCure a mobile app development company that makes your business a touch away on iPhone, Android or iPad. We develop creative and customer centric mobile apps to give your users and customers a ceaseless friendly experience. Our proficient developers and passionate designers turn you unfashioned ideas into user-satisfying products. Without limiting ourselves, we match your energy and serve worldwide. Let’s discuss your ideas.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_mobile_development_re_wwsn.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default MobileApp