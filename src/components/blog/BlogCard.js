import React from 'react'

export const BlogCard = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <h4>{post.team}</h4>
        <h4>{post.player}</h4>
        <p>{post.post}</p>
        <button>Delete Post</button>
    </div>
  )
}
