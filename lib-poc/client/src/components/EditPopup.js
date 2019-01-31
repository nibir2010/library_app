import React from 'react'

const EditPopup = ({dispatch,editTodo,selectedBook}) => {
  debugger
  let input1 = "",
     input2 = "",
     input3 = "",
  _selectedBook = {...selectedBook};
  if(Object.keys(_selectedBook).length === 0 ){
    return null
  }
  return (
  	<div className='add-new-book'>
        <div className='each-cell'><div className='each-cell-text'>NAME: </div> <div className='each-cell-input'><input ref={node => (input1 = node)} placeholder={_selectedBook.name}/></div></div>
        <div className='each-cell'><div className='each-cell-text'>DESC: </div> <div className='each-cell-input'><input ref={node => (input2 = node)} placeholder={_selectedBook.description}/></div></div>
        <div className='each-cell'><div className='each-cell-text'>AUTHOR: </div> <div className='each-cell-input'><input ref={node => (input3 = node)} placeholder={_selectedBook.author}/></div></div>
        <button onClick={e => {
          e.preventDefault()
          if (!input1.value.trim()) {
            return
          }
          dispatch(editTodo(input1.value,input2.value,input3.value,_selectedBook.id))
          input1.value = ''
          input2.value = ''
          input3.value = ''
        }} 
        type="submit">Edit selected Book Details</button>
    </div>
  )
}
export default EditPopup