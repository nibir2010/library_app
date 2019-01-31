import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { fetchAllBooks } from '../actions'

const TodoList = ({ todos, toggleTodo ,dispatch}) => (
  <div className='book-list'>
  <div className='book-head'><button onClick={()=>dispatch(fetchAllBooks())}>BOOK LIST</button></div>
  <div className='details'>
    <div className='book-details'>ID</div>
    <div className='book-details'>NAME</div>
    <div className='book-details'> DESCRIPTION</div>
    <div className='book-details'>AUTHOR</div>
  </div>
  <div className='book-table'>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo)} />
    ))}
  </div>
  </div>
)



export default connect()(TodoList)