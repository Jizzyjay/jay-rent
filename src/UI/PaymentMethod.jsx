import React from 'react'
import masterCard from '../asset/images/mastercard-6-logo-png-transparent.png'
import paypal from '../asset/images/paypal_PNG22.png'
import '../styles/payment.css'

const PaymentMethod = () => {
    return (
        <>
            <div className='payment'>
                <label htmlFor='' className='d-flex align-items-center gap-2'>
                    <input type='radio'>Direct Bank Transfer</input>
                </label>
            </div>

            <div className='payment mt-3'>
                <label htmlFor='' className='d-flex align-items-center gap-2'>
                    <input type='radio'>Cheque Payment</input>
                </label>
            </div>

            <div className='payment mt-3 d-flex align-items-center justify-content-between'>
                <label htmlFor='' className='d-flex align-items-center gap-2'>
                    <input type='radio'>Master Card</input>
                    <img src={masterCard} alt='' />
                </label>
            </div>

            <div className='payment mt-3 d-flex align-items-center justify-content-between'>
                <label htmlFor='' className='d-flex align-items-center gap-2'>
                    <input type='radio'>Paypal</input>
                    <img src={paypal} alt='' />
                </label>
            </div>
            <div className='payment text-end mt-5'>
                <button>Reserve Now</button>
            </div>
        </>
    )
}

export default PaymentMethod