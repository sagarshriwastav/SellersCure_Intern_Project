import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';



const Home = () => {
  return (
    <>
      <Row>

      </Row>
      <Row>

      </Row>
      <Row></Row>


      <Row style={{ backgroundColor: "#ffe6f2" }} d-flex justify-content-center>
        <h2 className='d-flex justify-content-center'>What Our Clients Says About Our Services</h2>
        <br /><br />
        <Col md={4}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Soniya Rohilla</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Col>
        <Col md={4}></Col>
        <Col md={4}></Col>
      </Row>


      <Row style={{ backgroundColor: "#e6fffa" }} >
        <h1 className='d-flex justify-content-center' >Our Team</h1>
        <br /><br /><br />
        <Col md={3}  >
          <p className='d-flex justify-content-center'>Vinay Srivastav</p>
          <p className='d-flex justify-content-center'>Director & Founder</p>
        </Col>
        <Col md={3} >
          <p className='d-flex justify-content-center'>Naresh Sharma</p>
          <p className='d-flex justify-content-center'>Director</p>
        </Col>
        <Col md={3} >
          <p className='d-flex justify-content-center'>Satrughan Srivastava</p>
          <p className='d-flex justify-content-center'>IT Head</p>
        </Col>
        <Col md={3} >
          <p className='d-flex justify-content-center'>Shivani Kashyap</p>
          <p className='d-flex justify-content-center'>Key Account Manager</p>
        </Col>
      </Row>
    </>
  )
}

export default Home