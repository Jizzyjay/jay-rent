import React from 'react'
import '../styles/become-driver.css'
import { Container, Row, Col } from 'reactstrap'
import driver from '../asset/cars/pexels-mike-b-4786752-removebg-preview.png'

const BecomeDriver = () => {
    return (
        <section className='become_driver'>
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12' className='become_driver-img'>
                    <img src={driver} alt='' className='w-100' />
                </Col>

                <Col lg='6' md='6' sm='12'>
                    <h2 className='section_title become_driver-title'>Drive to Earn with us</h2>

                    <button className='btn become_driver-btn mt-4'>Become a Driver</button>
                </Col>
            </Row>
        </Container>

        </section>
    )
}

export default BecomeDriver