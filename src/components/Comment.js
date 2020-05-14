import React from 'react';
import './Comment.css';

export default function Comment({comment}) {
  return (
    <div className="reply">
      <img src={comment.author.avatar}/>

      <p>
        <strong>{comment.author.name} </strong> 
        {comment.content}
      </p>
    </div>
  )
}