import React from 'react'
import { connect } from 'react-redux'
import { addTodo,fetchAllBooks } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input1 = "";
  let input2 = "";
  let input3 = "";

  return (
    <div className='add-new-book'>
        <div className='each-cell'><div className='each-cell-text'>NAME:</div> <div className='each-cell-input'><input ref={node => (input1 = node)} /></div></div>
        <div className='each-cell'><div className='each-cell-text'>DESC:</div> <div className='each-cell-input'><input ref={node => (input2 = node)} /></div></div>
        <div className='each-cell'><div className='each-cell-text'>AUTHOR:</div> <div className='each-cell-input'><input ref={node => (input3 = node)} /></div></div>
        <button onClick={e => {
          e.preventDefault()
          if (!input1.value.trim()) {
            return
          }
          dispatch(addTodo(input1.value,input2.value,input3.value))
          // dispatch(fetchAllBooks())
          input1.value = ''
          input2.value = ''
          input3.value = ''
        }} 
        type="submit">Add New Book</button>
    </div>
  )
}

export default connect()(AddTodo)