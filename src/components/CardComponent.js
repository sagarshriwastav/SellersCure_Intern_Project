import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header className='bg-info ' > <i style={{ color: "white", fontStyle: "normal", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px" }}>About SellersCure</i>  </Card.Header>
                            <Card.Body className='bg-light'>
                                <Card.Text >
                                    “Sellers Cure The Business Developers is Business Developing Consultancy. We are providing services for E-Commerce Sellers, We lay the right foundation for accelerating sustainable top line growth and development for start-ups, small and mid-size and large-size business. “
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <div className='my-5' style={{ width: 350, letterSpacing: ".5px", marginTop: 2, lineHeight: 1.5 }}> */}
            {/* <CardComponent></CardComponent> */}

            {/* </div> */}
        </>

    )
}

export default CardComponent