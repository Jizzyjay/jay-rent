import React from 'react'
import Slider from 'react-slick'
import T1 from '../asset/test-image/pexels-fernanda-latronico-713520.jpg'
import T2 from '../asset/test-image/pexels-hasibullah-zhowandai-819530.jpg'
import T3 from '../asset/test-image/pexels-mentatdgt-1672548.jpg'
import T4 from '../asset/test-image/pexels-mohamed-abdelghaffar-764529.jpg'
import T5 from '../asset/test-image/pexels-rebrand-cities-1367269.jpg'

import '../styles/testimonial.css'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1, 
                infinite: true,
                dots: true
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        },
    ]
}
    return (
        <Slider { ...settings }>
            <div clasName='testimonials py-4 px-3'>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.diam in egestas port et mollis elit sem quis mauris. Morbi vitae mauris pulvinar, facilisis mi suscipit, lacinia dui.
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={T1} alt='' className='w-25 h-25 rounded-2' />

                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p className='section_description'>Customer</p>
                    </div>
                </div>
            </div>

            <div clasName='testimonials py-4 px-3'>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet, tortor neque vestibulum nisi, et mollis elit sem quis mauris. Morbi vitae mauris pulvinar, facilisis mi suscipit, lacinia dui.
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={T2} alt='' className='w-25 h-25 rounded-2' />

                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p className='section_description'>Customer</p>
                    </div>
                </div>
            </div>

            <div clasName='testimonials py-4 px-3'>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae mauris pulvinar, facilisis mi suscipit, lacinia dui.
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={T3} alt='' className='w-25 h-25 rounded-2' />

                    <div>
                        <h6 className='mb-0 mt-3'>Sarah</h6>
                        <p className='section_description'>Customer</p>
                    </div>
                </div>
            </div>

            <div clasName='testimonials py-4 px-3'>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, diam in egestas porttitor,
                    et mollis elit sem quis mauris. Morbi vitae mauris pulvinar, facilisis mi suscipit, lacinia dui.
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={T4} alt='' className='w-25 h-25 rounded-2' />

                    <div>
                        <h6 className='mb-0 mt-3'>Halima</h6>
                        <p className='section_description'>Customer</p>
                    </div>
                </div>
            </div>

            <div clasName='testimonials py-4 px-3'>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, diam in egestas porttitor, 
                    tortor neque vestibulum nisi, et mollis elit sem quis mauris. Morbi vitae mauris pulvinar.
                </p>

                <div className='mt-3 d-flex align-items-center gap-4'>
                    <img src={T5} alt='' className='w-25 h-25 rounded-2' />

                    <div>
                        <h6 className='mb-0 mt-3'>Mr & Mrs David</h6>
                        <p className='section_description'>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials