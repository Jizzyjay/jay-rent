import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'

const CarList = () => {
    return (
        <Helmet title='Cars'>
            <CommonSection title='Cars' />
        </Helmet>
    )
}

export default CarList