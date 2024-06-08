import React from 'react'
import './BlogCard.css'

function BlogCard({title, content, author, date, categories}) {
  return (
    <div className="blog-card">
        <h1 className='blog-title'> {title} </h1>
        <p className='blog-content-preview'> {content.substring(0,70)}... </p>
        <div className='author-card'>
            <img src={author.avatar} alt='img' className='author-img'/>
            <span className='author-name'> {author.name} </span>
            <span className='blog-date'> {date} </span>
        </div>
        {
          categories.map((category, i)=> {
            return <span key={i} className='blog-categories'> {category} </span>
          })
        }
    </div>
  )
}

export default BlogCard