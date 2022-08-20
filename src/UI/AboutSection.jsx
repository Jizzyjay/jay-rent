import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import '../styles/about-section.css'
import AboutImg from '../asset/cars/about1.jpg'

const AboutSection = ({ aboutClass}) => {
    return (
        <section className='about_section' 
            style= {aboutClass === 'aboutPage' 
            ? {marginTop: '0px'} 
            : {marginTop: '280px'}
            }>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='about_section-content'>
                            <h4 className='section_subtite'>About Us</h4>
                            <h2 className='section_title'>Welcome to Jay Car Rent Service</h2>
                            <p className='section_description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam aliquet purus eget mollis. 
                                Aenean nec congue odio. Aenean ac efficitur purus. In ullamcorper massa in nulla feugiat, ut rutrum quam posuere. Quisque nec eleifend ipsum. 
                                Maecenas vel nisi augue. Vestibulum velit tortor, efficitur quis elementum id, lacinia ut turpis. Mauris elementum posuere nibh. Ut at diam justo.
                            </p>

                            <div className='about_section-item d-flex align-items-center'>
                                <p className='section_description d-flex align-items-ccenter gap-2'>
                                    <i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor sit
                                </p>

                                <p className='section_description d-flex align-items-ccenter gap-2'>
                                    <i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor sit
                                </p>
                            </div>

                            <div className='about_section-item d-flex align-items-center'>
                                <p className='section_description d-flex align-items-ccenter gap-2'>
                                    <i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor sit
                                </p>

                                <p className='section_description d-flex align-items-ccenter gap-2'>
                                    <i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor sit
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='about_img'>
                            <img src={AboutImg} 
                                alt='' 
                                className='w-100' />
                        </div>
                    </Col>

                    <Col lg='6' md='6'></Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection