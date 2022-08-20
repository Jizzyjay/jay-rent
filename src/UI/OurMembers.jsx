import React from 'react'
import '../styles/our-member.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import mem2 from '../asset/images/Mem/portrait-3157821_1920.jpg'
import mem1 from '../asset/images/Mem/pexels-andrea-piacquadio-845457.jpg'
import mem4 from '../asset/images/Mem/pexels-pixabay-354951.jpg'
import mem3 from '../asset/images/Mem/portrait-2194457_1920.jpg'




const OUR_MEMBERS = [
    {
        name: 'John Doe',
        experience: '3 years experience',
        fbUrl: '#',
        twitUrl: '#',
        instUrl: '#',
        linkedinUrl: '#',
        imgUrl: mem1
    },
    {
        name: 'John Doe',
        experience: '3 years experience',
        fbUrl: '#',
        twitUrl: '#',
        instUrl: '#',
        linkedinUrl: '#',
        imgUrl: mem2
    },
    {
        name: 'John Doe',
        experience: '3 years experience',
        fbUrl: '#',
        twitUrl: '#',
        instUrl: '#',
        linkedinUrl: '#',
        imgUrl: mem3
    },
    {
        name: 'John Doe',
        experience: '3 years experience',
        fbUrl: '#',
        twitUrl: '#',
        instUrl: '#',
        linkedinUrl: '#',
        imgUrl: mem4
    },
    // {
    //     name: 'John Doe',
    //     experience: '3 years experience',
    //     fbUrl: '#',
    //     instUrl: '#',
    //     linkedinUrl: '#',
    //     imgUrl: 'mem4'
    // },
]

const OurMembers = () => {
    return (
        <>
            {
                OUR_MEMBERS.map((item, index) => (
                    <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
                        <div className='single_member'>
                            <div className='single_member-img'>
                            <img src={item.imgUrl} alt='' className='w-100' />

                            <div className='single_member-social'>
                                <Link to={item.fbUrl}><i class='ri-facebook-line' /></Link>
                                <Link to={item.twitUrl}><i class='ri-twitter-line' /></Link>
                                <Link to={item.instUrl}><i class='ri-instagram-line' /></Link>
                                <Link to={item.linkedinUrl}><i class='ri-linkedin-line' /></Link>
                            </div>
                        </div>

                        <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                        <p className='section_description text-center'>{item.experience}</p>
                        </div>

                    </Col>
        ))
    }
        </>
    )
}

export default OurMembers