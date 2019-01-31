import React from 'react'

const Todo = ({ onClick, completed, id,name, description, author}) => (

  <div className='details' onClick={onClick}>
    <div className='book-details'>{id}</div>
    <div className='book-details'>{name}</div>
    <div className='book-details'> {description}</div>
    <div className='book-details'>{author}</div>
  </div>
)


export default Todo