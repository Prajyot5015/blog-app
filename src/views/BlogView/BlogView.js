import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './../../data'
import './BlogView.css'

function BlogView() {
  const { id } = useParams()

  const selectBlog = blogs.find((blogObject) => blogObject.id === id)

  return (
    <div className='blog-detail-container'>
      <h1 className='title'>{selectBlog.title}</h1>
      <div className='author-container'>
        <img src={selectBlog.author.avatar} alt='img' className='author-image' />
        <div>
          <div>
            <span className='name'> {selectBlog.author.name} </span>
            <span className='dot'>.</span>
            <span className='follow'>Follow</span>
          </div>
          <div>
            <span className='dim-color'> 3 min read </span>
            <span className='dot'>.</span>
            <span  className='dim-color'> {selectBlog.date} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogView