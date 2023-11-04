import React from 'react';
import '../App';
import { connect } from 'react-redux';
import { likeReducer } from './../redux/likeReducer';
import { incrementLikes, decrementLikes } from '../redux/actions'; 

function Likes(props) {
  
  return (
    <div className='custom-button'>
      <button onClick={props.onIncrimentLikes} className='button-like'> &#10084; {props.likes}</button>
      <button onClick={props.onDecrimentLikes} className='button-dislike'> dislike </button>
    </div>
  )
}

function mapStateToProps(state) {
  
  const {likeReducer} = state
  return {
    likes: likeReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrimentLikes: () =>  dispatch(incrementLikes()),
    onDecrimentLikes: () => dispatch(decrementLikes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)