import React from 'react';
import '../App';
import { connect } from 'react-redux';

function Likes(props) {
  console.log(props)
  return (
    <div className='custom-button'>
      <button onClick={props.onIncrimentLikes} className='button-like'> &#10084; {props.likes}</button>
      <button className='button-dislike'> dislike </button>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    likes: state.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrimentLikes: () => {
      console.log('click 1');
      const action = {type: 'INCREMENT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)