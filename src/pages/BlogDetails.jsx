import React, { useEffect } from 'react'
import { Container, Col, Row, Form, FormGroup, Input } from 'reactstrap'
import { useParams, Link } from 'react-router-dom'
import blogData from '../asset/data/blogData'
import Helmet from '../components/Helmet/Helmet'
import CommentImg from '../asset/images/Mem/portrait-3157821_1920.jpg'
import '../styles/blog-details.css'


const BlogDetails = () => {

  const {slug} = useParams()
  const blog = blogData.find(blog => blog.title === slug)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='8'>
              <div className='blog_details'>
                <img src={blog.imgUrl} alt='' className='w-75'/>
                <h2 className='section_title mt-4'>{blog.title}</h2>

                <div className='blog_plublisher d-flex align-items-center gap-4 mb-4'>
                  <span className='blog_author'>
                    <i class='ri-user-line'></i>{blog.author}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                    <i class='ri-calander-line'></i>{blog.date}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                    <i class='ri-time-line'></i>{blog.time}
                  </span>
                </div>
                  <p className='section_description'>{blog.description}</p>
                  <h6 className='ps-5 fw-normal'><blockquote className='fs-4'>{blog.quote}</blockquote></h6>
                  <p className='section_description'>{blog.description}</p>
              </div>

              <div className='comment_list mt-5'>
                <h4 className='mb-5'>3 Comments</h4>
                
                <div className='single_comment d-flex gap-3'>
                <img src={CommentImg} alt=''  />

                  <div className='comment_content'>
                    <h6 className='fw-bold'>David Visa</h6>
                    <p className='section_description mb-0'>14 July, 2022</p>
                    <p className='section_description'>Ut volutpat ligula diam, vitae dapibus erat aliquam quis. Nulla ullamcorper id elit quis facilisis. Morbi tellus diam, commodo at urna non, vulputate porttitor ex. Fusce convallis venenatis urna. </p>
                    <span className='replay d-flex align-items-center gap-1'>
                      <i class='ri-replay-line'></i>Replay
                    </span>
                  </div>
                </div>

                <div className='leave_comment-form mt-5'>
                  <h4> Leave a comment</h4>
                  <p className='section_description'>Sign-in to make or comment on a post</p>

                  <Form>
                    <FormGroup className='d-flex gap-3'>
                      <Input type='text' placeholder='Full Name' />
                      <Input type='text' placeholder='Email' />
                    </FormGroup>

                    <FormGroup>
                      <textarea 
                        rows='5' 
                        className='w-100 py-2 px-3'
                        placeholder='Comment....'></textarea>
                    </FormGroup>

                    <button className='btn comment_btn mt-3'>Post a Comment</button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
            <div className='recent_post mb-4'>
              <h5 className='fw-bold'>Recent Post</h5>
            </div>
              {
                blogData.map(item => (
                  <div className='recent_blog-post mb-4' key={item.id}>
                    <div className='recent_blog-item d-flex gap-3'>
                      <img src={item.imgUrl} alt='' className='w-25 rounded-2' />
                      <h6><Link to={`/blogs/${item.title}`}>{blog.title}</Link></h6>
                    </div>
                  </div>
                ))
              }

            </Col>
          </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails