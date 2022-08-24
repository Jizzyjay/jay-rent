import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarList from '../pages/CarList'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car" element={<CarList />} />
      <Route path="/car/:slug" element={<CarDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/" element={<NotFound />} />
    </Routes>
  )
}

export default Router