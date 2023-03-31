import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from './CardComponent'



const Career = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Career</span></h1>
          <p>
            We at Sellers Cure promote talent as well as potential and if you are one of those who are filled with enthusiasm and exuberance and would love to learn and do something new every day, Sellers Cure shall be a place where you would love to work in.
          </p>
          <h4>Current Opennings!</h4>
          <br />
          <h4>E-Commerce Executive</h4>
          <p>Requirement for our Company who is having good knowledge of E-commerce website development and can manage it as well and must know how to manage product listing on Flipkart, Amazon, Snapdeel, ebay etc. order processing, good knowledge of Excel, Excel Formulas, VLOOKUP etc.
            <br /><br />
            Interested candidate can send your resume on <b>info@sellerscure.com</b> </p> 
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Career