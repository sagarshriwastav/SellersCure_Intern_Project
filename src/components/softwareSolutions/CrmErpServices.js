import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'


const CrmErpServices = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >CRM/ERP Services</span></h1>
          <p>
            Now your teams can be more productive without getting stressed about work. Assign tasks and don’t fret ever again. Sellers Cure gets your work streamlined as you get more time to increase your customer base and sales.
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_cms_re_asu0.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default CrmErpServices