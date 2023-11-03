import React from 'react';
import '../App';
import { connect } from 'react-redux';
import { likeReducer } from './../redux/likeReducer';

function Likes(props) {
  console.log(props)
  return (
    <div className='custom-button'>
      <button onClick={props.onIncrimentLikes} className='button-like'> &#10084; {props.likes}</button>
      <button onClick={props.onDecrimentLikes} className='button-dislike'> dislike </button>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  const {likeReducer} = state
  return {
    likes: likeReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrimentLikes: () => {
      console.log('Incriment');
      const action = {type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrimentLikes: () => {
      console.log('Decriment');
      const action = {type: 'DECREMENT'};
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)