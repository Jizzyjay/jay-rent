import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/car-item.css'

const CartItem = (props) => {

    const { imgUrl, carName, model, automatic, speed, price } = props.item
    return (
        <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className='car_item'>
                <div className='car_img'>
                    <img src={imgUrl} alt='' className='w-100'/>
                </div>

                <div className='car_item-content mt-4'>
                    <h4 className='section_title text-center'>{carName}</h4>
                    <h6 className='rent_price text-center mt-'>{price}
                        <span>/ Day</span></h6>

                        <div className='car_item-info d-flex align-items-center
                            justify-content-between mt-3 mb-4'>
                            <span className='info d-flex align-items-center gap-1'><i class='ri-car-line'></i>{model}</span>
                            <span className='info d-flex align-items-center gap-1'><i class='ri-settings-2-line'></i>{automatic}</span>
                            <span className='info d-flex align-items-center gap-1'><i class='ri-timer-flash-line'></i>{speed}</span>
                        </div>

                        <button className='w-50 car_item-btn car_btn-rent'>
                            <Link to={`/car/${carName}`}>Rent</Link>
                        </button>

                        <button className='w-50 car_item-btn car_btn-details'>
                            <Link to={`/car/${carName}`}>Details</Link>
                        </button>
                </div>
            </div>
        </Col>
)
}

export default CartItem