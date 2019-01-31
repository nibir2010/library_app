import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import showEdit from './showEdit'

export default combineReducers({
  todos,
  visibilityFilter,
  showEdit
})