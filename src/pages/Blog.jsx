import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import BlogList from '../UI/BlogList'

const Blog = () => {
  return (
    <Helmet title='Blog'>
    <CommonSection title='Blog' />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Blog