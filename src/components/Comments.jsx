import React, { useState } from 'react'
import SingleComments from './SingleComments'
import { commentCreate } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { commentsReducer } from './../redux/commentReducer';
const { v4: uuidv4 } = require('uuid');


function Comments(props) {
  const [textComment, setTextComment] = useState('');
  //console.log('comments: ', props)
  const comments = useSelector(state => {
    console.log('redux state: ', state)
    const {commentsReducer} = state;
    return commentsReducer.comments 
  });
  console.log('result comments: ', comments);
  const handleInput = (e) => {
    setTextComment(e.target.value);
  }
  const id = uuidv4();

  const dispatch = useDispatch();
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(commentCreate(textComment, id))
    console.log('submit text comment', textComment)

  }

  return (
    <div className='card-comments'>
      <form className='comments-item-create' onSubmit={handleSubmit}>
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
        />
        <input type="submit" hidden />
      </form>
      <SingleComments />
    </div>
  )
}

export default Comments