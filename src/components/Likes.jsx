import React from 'react';
import '../App';
import {connect} from 'react-redux';

function Likes(props) {
    console.log(props)
  return (
    <div className='custom-button'>
        <button className='button-like'> &#10084; {props.like}</button>
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

export default connect(mapStateToProps)(Likes)