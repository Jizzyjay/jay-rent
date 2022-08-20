import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import '../../styles/footer.css'

const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/car',
    display: 'Car List'
  },
  {
    path: '/blog',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const date = new Date()
const year = date.getFullYear()


const Footer = () => {
  return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col>
              <div className='logo footer_logo'>
                <h1>
                  <Link to='/home' className='d-flex align-items-center gap-2'>
                    <i class='ri-car-line'></i>
                    <span>Jay Rent <br /> Car Service </span>
                  </Link>
                </h1>
              </div>
              <p className='footer_logo-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec pellentesque massa. Donec eu quam vulputate, feugiat risus fringilla, interdum ligula. Integer posuere massa vitae ligula varius, vitae varius sapien dignissim. Etiam faucibus venenatis augue, sit amet vestibulum dolor convallis vel.
              </p>
            </Col>

            <Col lg='2' md='4' sm='6'>
              <div className='mb-4'>
                <h5 className='footer_link-title'>Quick Links</h5>
                <ListGroup>
                  {
                    quickLinks.map(( item, index) => (
                      <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                    ))
                  }
                </ListGroup>
              </div>
            </Col>

            <Col lg='3' md='4' sm='6'>
                <div className='mb-4'>
                  <h5 className='footer_link-title mb-4'>Head Office</h5>
                  <p className='office_info'>1 ikeja, Lagos Nigeria. </p>
                  <p className='office_info'> Phone: +234 8141153727 </p>
                  <p className='office_info'>Email: ekunolajohn@gmail.com </p>
                  <p className='office_info'>Office Time: 9am - 6pm </p>
                </div>
            </Col>

            <Col lg='3' md='4' sm='12'>
              <div className='mb-4'>
                <h5 className='footer_link-title'>Newsletter</h5>
                <p className='section_description'>Suscribe to our Newsletter</p>
                <div className='newsletter'>
                  <input type='email' placeholder='Email' />
                  <span>
                    <i class='ri-send-plane-line'></i>
                  </span>
                </div>
              </div>
            </Col>

            <Col lg='12'>
              <div className='footer_bottom'>
                <p className='section_description d-flex 
                  align-items-center justify-content-center gap-1 pt-4'>
                  <i className='ri-copyright-line'></i>CopyRight {year},
                    by John Ekunola. All right reserved.
                </p>
              </div>      

            </Col>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer