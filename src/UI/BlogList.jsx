import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import '../styles/blog-item.css'
import blogData from '../asset/data/blogData'

const BlogList = () => {
    return (
        <div>
            {
                blogData.map(( item ) => (
                    <BlogItem item={item} key={item.id} />
                ))
            }
        </div>
    )
}

const BlogItem = ({ item }) => {

    const {imgUrl, title, author, date, description, time } = item

    return (
        <Col lg='4' md='6' sm='6' className='mb-5'>
            <div className='blog_item'>
                <img src={imgUrl} alt='' className='w-100' />
                <div className='blog_info p-3'>
                    <Link to={`/blogs/${title}`} className='blog_title'>{title}</Link>
                    <p className='section_description mt-3'>
                        { description.length > 120 ? description.substr(0, 100) : description }
                    </p>

                    <Link to={`/blogs/${title}`} className='read_more'>Read More</Link>

                    <div className='blog_time pt-3 mt-3 d-flex align-items-center justify-content-between'>
                        <span className='blog_author'>
                            <i class='ri-user-line'></i>{author}
                        </span>

                        <div className='d-flex align-items-center gap-3'>
                            <span className='d-flex align-items-center gap-1 section_description'>
                                <i class='ri-calander-line'></i>{date}
                            </span>

                            <span className='d-flex align-items-center gap-1 section_description'>
                                <i class='ri-time-line'></i>{time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )

}

export default BlogList