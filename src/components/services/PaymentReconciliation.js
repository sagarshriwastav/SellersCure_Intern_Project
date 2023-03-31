import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'


const PaymentReconciliation = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Payment Reconciliation</span></h1>
          <p>
          Sellers Cure The Business Developers is Business Developing Consultancy. We are providing services for E-Commerce Sellers, We lay the right foundation for accelerating sustainable top line growth and development for start-ups, small and mid-size and large-size business. Its Co- Founded by Vinay Srivastav, Naresh sharma & Devender Dutt. They are belongs E-commerce Backgound More then 4 Years. Out team of experienced professionals at Sellers Cure provides business consulting services to those Sellers who are either facing problems with their online marketplaces or despite of having a very well established offline business are struggling to establish a blooming online marketplace.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_plain_credit_card_re_c07w.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default PaymentReconciliation