import React from 'react';
import Comment from './Comment';
import './Post.css';

export default function Post({post}) {
  return(
    <div className="card">
      <div className="comment">
        <img src={post.author.avatar}/>
        <div className="author-name">
          <h2>{post.author.name}</h2>
          <small>{post.date}</small>
        </div>
      </div>

      <h3>{post.content}</h3>

      {post.comments && post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

    </div>
  )
}