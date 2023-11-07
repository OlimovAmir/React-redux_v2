import React, { useEffect, useState } from 'react'
import '../App';
import { useDispatch } from 'react-redux';
import { commentDelete, commentUpdate } from '../redux/actions';


function SingleComments({ data }) {
  const [commentsText, setCommentText] = useState('');
  const { text, id } = data;
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('text Update --> ', commentsText )
    dispatch(commentUpdate(commentsText, id))

  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
    
  }
  return (
    <div className=''>
      
      <form onSubmit={handleUpdate} className='formSingleComments'>
        <div className='close' onClick={handleDelete} >
          &times;
        </div>
        <input type='text' value={commentsText} onChange={handleInput} />
        <input type='submit' hidden />
      </form>
    </div>
  )
}

export default SingleComments