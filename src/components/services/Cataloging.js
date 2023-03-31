import React from 'react'
import CardComponent from '../CardComponent'
import { Container, Row, Col, } from "react-bootstrap"

const Cataloging = () => {
  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col md={8} >
            <h1><span style={{ color: "#6c63ff" }} >Cataloging </span></h1>
            {/* <p style={{ letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}> */}
            <p  >
              The most basic method for displaying a product range on any website is to list the products and their features. Customers can compare the different elements of each product to find what best suits their needs.
            </p>
            <img style={{ width: "250px" }} src="/images/data_catalog2.svg" alt="" />
            <p>
              You can choose which product information is most relevant and you can control the sort order or use the system to create a sort order based on some particular product characteristic. It’s also important to allow your customers to change the sort order as well, and sort the products according to their own wishes.
              <br />
              What your customers see – displayed product information.
              <br />
              What your customers see first – the sort order of products.
            </p>
            <img style={{ width: "250px" }} src="/images/undraw_web_shopping_re_owap.svg" alt="" />
          </Col>
          <Col md={4} >
            <CardComponent></CardComponent>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cataloging