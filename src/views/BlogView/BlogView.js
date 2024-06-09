import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './../../data'

function BlogView() {
    const {id} = useParams()

    const selectBlog = blogs.find((blogObject)=> blogObject.id === id)

  return (
    <div>
        <h1>{selectBlog.title}</h1>
     </div>
  )
}

export default BlogView