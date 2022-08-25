import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import '../styles/contact.css'

const socialLinks = [
    {
        url: "#",
        icon: 'ri-linkedin-fill'
    },
    {
        url: "#",
        icon: 'ri-twitter-fill'
    },
    {
        url: "#",
        icon: 'ri-github-fill'
    },
    {
        url: "#",
        icon: 'ri-facebook-line'
    },
    {
        url: "#",
        icon: 'ri-instagram-line'
    }
]

const Contact = () => {
    return (
        <Helmet title='Contact'>
            <CommonSection title='Contact' />
            <section>
                <Container>
                    <Row>
                        <Col lg='7' md='7'>
                            <h6 className='fw-bold mb-4'>Get in Touch</h6>
                            <Form>
                                <FormGroup>
                                    <Input placeholder='Full Name' text='text' />
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder='Email' text='email' />
                                </FormGroup>
                                <FormGroup>
                                    <textarea 
                                        rows='5' 
                                        placeholder='Message'
                                        className='textarea'></textarea>
                                </FormGroup>

                                <button className='btn contact_btn' type='submit'>Send</button>
                            </Form>
                        </Col>
                        <Col lg='5' md='5'>
                            <div className='contact_info'>
                                <h6 className='fw-bold'>Contact Information</h6>
                                <p className='section_description mb-0'>Ikeja, Lagos, Nigeria.</p>
                            
                                <div className='d-flex align-items-center gap-2'>
                                    <h6 className='fs-6 mb-0'>Phone:</h6>
                                    <p className='section_description mb-0'>+234 8141153727</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <h6 className='fs-6 mb-0'>Email:</h6>
                                    <p className='section_description mb-0'>ekunolajohn@gmail.com</p>
                                </div>
                                <h6 className='mt-4 fw-bold'>Follow Us</h6>

                                <div className='d-flex align-items-center gap-4 mt-3'>
                                    {
                                        socialLinks.map((item, index) => (
                                            <Link 
                                                to={item.url} 
                                                key={index}
                                                className='social_link-icon'>
                                                <i class={item.icon} /></Link>
                                        ))
                                    }
                                </div>

                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Contact