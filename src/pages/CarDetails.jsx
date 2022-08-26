import React, { useEffect } from 'react'
import carData from '../asset/data/carData'
import { Container, Col, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import BookingForm from '../UI/BookingForm'
import PaymentMethod from '../UI/PaymentMethod'

const CarDetails = () => {

    const { slug } = useParams();

    const singleCarItem = carData.find((item) => item.carName === slug);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [singleCarItem])
    
    return (
        <Helmet >
        title={singleCarItem.carName}
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={singleCarItem.imgUrl} alt='' className='w-100'/>
                        <h2>{singleCarItem.carName}</h2>
                    </Col>
                    <Col lg='6'>
                        <div className='car_info'>
                            <h2 className='section_title'>{singleCarItem.carName}</h2>
                            <div className='d-flex align-items-center gap-5'>
                                <h6 className='rent_price fw-bold fs-4'>#{singleCarItem.price} / Day</h6>
                            
                                <span className='s-flex align-items-center gap-2'>
                                    <span style={{ color: '#f9a826'}}>
                                        <i class='ri-stars-s-fill'></i>
                                        <i class='ri-stars-s-fill'></i>
                                        <i class='ri-stars-s-fill'></i>
                                        <i class='ri-stars-s-fill'></i>
                                        <i class='ri-stars-s-fill'></i>
                                    </span>
                                    ({ singleCarItem.rating} ratings)
                                </span>
                            </div>

                            <p className='section_description'>{singleCarItem.description}</p>

                            <div className='d-flex align-items-center mt-3' 
                                style={{ columnGap: '4rem' }}>
                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-roadster-line' style={{ color: '#f9a826' }}></i>{singleCarItem.model}
                                    </span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-settings-2-line' style={{ color: '#f9a826' }}></i>{singleCarItem.automatic}
                                    </span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-timer-flash-line' style={{ color: '#f9a826' }}></i>{singleCarItem.speed}
                                    </span>
                                </div>

                                <div className='d-flex align-items-center mt-3' 
                                style={{ columnGap: '2.8rem' }}>
                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-map-pin-line' style={{ color: '#f9a826' }}></i>{singleCarItem.gps}
                                    </span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-wheelchair-line' style={{ color: '#f9a826' }}></i>{singleCarItem.seatType}
                                    </span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i class='ri-buiding-2-line' style={{ color: '#f9a826' }}></i>{singleCarItem.brand}
                                    </span>
                                </div>
                        </div>
                    </Col>

                    <Col lg='7' className='mt-5'>
                        <div className='booking-info'>
                            <h5 className='mb-4 fw-bold'>Booking Information</h5>
                            <BookingForm />
                        </div>
                    </Col>
                    <Col lg='5' className='mt-5'>
                        <div className='payment-info mt-5'>
                            <h5 className='mb-4 fw-bold'>Booking Information</h5>
                            <PaymentMethod />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    )
}

export default CarDetails