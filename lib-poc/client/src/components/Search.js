import React from 'react'
import { connect } from 'react-redux'
import { searchTodo } from '../actions'

const Search = ({dispatch}) => {
  let input = "";
  return <div style={{margin:"10px",display:"flex",alignItems:"center"}}>
	        <div style={{flex:"2"}}><input ref={node => (input = node)} />
	        <button onClick={e => {
	          dispatch(searchTodo(input.value))
	        }} 
	        type="submit">Search by Book Name</button></div>
	        <div style={{flex:"1",color:"red"}}>* Click on any book row in below table to edit the book deatails</div>
	    </div>
}

export default connect()(Search)