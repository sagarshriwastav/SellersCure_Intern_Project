import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent'



const WebsiteDesign = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={8}>
          <h1><span style={{ color: "#6c63ff" }} >Website Design & Development</span></h1>
          <p>
            We’ve the proven experience and proficiency in designing website that accomplish something by bringing in enquiries, which generate sales and are an asset to your business. As a website design company we offer a full-circle loom in <b>website design & web development</b>  where the actual web designing effort covers. Our website designing services covers strategic planning, business intelligence, creative, application development, product / service promotion & solution maintenance.
            <br /><br />
            Most of our time goes in considerate your business objectives, defining the problem and to conclude designing the best possible solution. Your website can offer you the best return for your investment, if done correctly.
            <br /><br />
            We understand the every company has a unique requirement when it comes to web designing. Where our responsibility is to project that uniqueness and make the website stand out from its competition. Contrasting a run-of-the-mill website designing we make it a spot to convey a distinguishing look to your website. Our web designing experts ensure that your website is search engine friendly according the googles’ parameter, aesthetically appealing and user friendly.
          </p>
          <br /><br />
          <img style={{ width: "250px" }} src="/images/undraw_building_websites_i78t.svg" alt="" />
        </Col>
        <Col md={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default WebsiteDesign