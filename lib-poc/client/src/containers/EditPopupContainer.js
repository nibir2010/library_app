import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions'
import  EditPopup from '../components/EditPopup'

const mapStateToProps = state => ({
  selectedBook: state.showEdit
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  editTodo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPopup)