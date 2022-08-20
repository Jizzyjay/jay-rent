import React from 'react'
import '../styles/findCar.css'
import { Form, FormGroup } from 'reactstrap'

const FindCar = () => {
    return (
        <Form className='form'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='From address' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='text' placeholder='To address' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type='date' placeholder='Journey date' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input className='journey_time' type='time' placeholder='Journey time' required />
                </FormGroup>
                <FormGroup className='select_group'>
                    <select>
                        <option value='ac'>Car with Ac</option>
                        <option value='non-ac'>Car without Ac</option>
                    </select>
                </FormGroup>

                <FormGroup className='form_group'>
                    <button className='btn find_car-btn'>Find Car</button>
                </FormGroup>
            </div>
        </Form>
    )
}

export default FindCar