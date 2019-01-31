import React from 'react'
import EditPopupContainer from '../containers/EditPopupContainer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Search from './Search'
import '../App.css';


const App = () => (
  <div className='App'>
    <AddTodo />
    <Search />
    <VisibleTodoList />
    <EditPopupContainer />
  </div>
)

export default App