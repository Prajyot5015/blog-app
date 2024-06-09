import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './../../data'
import './BlogView.css'
import ChatImg from './chat.png'
import ClapImg from './clap.png'
import MoreImg from './more.png'
import PlayImg from './play-button.png'
import SaveImg from './save-instagram.png'
import ShareImg from './share.png'

function BlogView() {
  const { id } = useParams()

  const selectBlog = blogs.find((blogObject) => blogObject.id === id)

  const {
    title,
    content,
    author,
    date,
    categories
  } = selectBlog

  return (
    <div className='blog-detail-container'>
      <h1 className='title'>{title}</h1>
      <div className='author-container'>
        <img src={author.avatar} alt='img' className='author-image' />
        <div>
          <div>
            <span className='name'> {author.name} </span>
            <span className='dot'>.</span>
            <span className='follow'>Follow</span>
          </div>
          <div>
            <span className='dim-color'> 3 min read </span>
            <span className='dot'>.</span>
            <span className='dim-color'> {date} </span>
          </div>
        </div>
      </div>
      <div className='like-share-container'>
        <div>
          <img src={ClapImg} className='like' />
          <img src={ChatImg} className='like' />
        </div>
        <div>
          <img src={SaveImg} className='icon' />
          <img src={PlayImg} className='icon' />
          <img src={ShareImg} className='icon' />
          <img src={MoreImg} className='icon' />
        </div>
      </div>
      <p className='blog-content'> {content} </p>
      {
          categories.map((category, i)=> {
            return <span key={i} className='categories'> {category} </span>
          })
        }
           <div className='like-share-container'>
        <div>
          <img src={ClapImg} className='like' />
          <img src={ChatImg} className='like' />
        </div>
        <div>
          <img src={SaveImg} className='icon' />
          <img src={PlayImg} className='icon' />
          <img src={ShareImg} className='icon' />
          <img src={MoreImg} className='icon' />
        </div>
      </div>
    </div>
  )
}

export default BlogView