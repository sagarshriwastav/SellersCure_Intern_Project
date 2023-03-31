import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'

const IncreaseSales = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Increase Sales </span></h1>
          <p>
            <b>ADVERTISING: </b> We burn midnight oil to provide you with best advertising of your product which could easily attract the attention of the customers.
            <br /><br />
            <b>KEYWORD OPTIMIZATION:  </b> We provide search engine keyword optimization to Drive qualified traffic to your product, Measure traffic potential, Write effective content and Understand user behavior to enhance your business.
            <br /><br />
            <b> DEALS & PROMOTIONS: </b>We will participate in the different deals provided by the website to get more traffic on our products & use the free promotional activities such as Price savings, discounts, coupons or added value offers.
            <br /><br />
            <b> SPONSORS / PRODUCT LISTING ADS: </b> We work diligently to provide you sponsored advertisement campaigns   which will cost you according to per click. Needless to say that this tool of promotion would put your product on the zenith of demand.
            <br /><br />
            <b>REVIEWS AND RATING:</b>  We provide reviews and ratings of your product time to time so that they can become the favorites of the viewers with an inclination to develop a positive approach towards the product.
            <br /><br />
          </p>
          <img style={{ width: "250px" }} src="/images/undraw_progress_data_re_rv4p.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default IncreaseSales