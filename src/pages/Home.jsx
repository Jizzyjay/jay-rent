import React from 'react'
import HeroSlider from '../UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import FindCar from '../UI/FindCar'
import AboutSection from '../UI/AboutSection'
import ServiceList from '../UI/ServiceList'
import carData from '../asset/data/carData'
import CarItem from '../UI/CarItem'
import BecomeDriver from '../UI/BecomeDriver'
import Testimonials from '../UI/Testimonials'
import BlogList from '../UI/BlogList'

const Home = () => {
    return (
        <Helmet title='Home'>
            <section className='p-0 hero_slider-section'>
                <HeroSlider />

                <div className='hero_form'>
                    <Container>
                        <Row className='form_row'>
                            <Col lg='4' md='4'>
                                <div className='find_cars-left'>
                                    <h2>Find a car that best suits you</h2>
                                </div>
                            </Col>

                            <Col lg='8' sm='12'>
                                <FindCar />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <AboutSection />
            
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section_subtitle'>See Our</h6>
                            <h2 className='section_title'>Popular Service</h2>
                        </Col>

                        <ServiceList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h6 className='section_subtitle'>Check Our</h6>
                            <h2 className='section_title'>Offers</h2>
                        </Col>

                        {
                            carData.map((item) => (
                                <CarItem item={item} key={item.id} />
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <BecomeDriver />

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-4 text-center'>
                            <h6 className='section_subtitle'>Our Client</h6>
                            <h2 className='section_title'>Testimonials</h2> 
                        </Col>
                        <Testimonials />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section_subtitle'>Check our blogs</h6>
                            <h2 className='section_title'>Latest Blogs</h2> 
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
)
}

export default Home