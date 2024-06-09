import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'

function BlogCard({id, title, content, author, date, categories}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
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
    </Link>
  )
}

export default BlogCard