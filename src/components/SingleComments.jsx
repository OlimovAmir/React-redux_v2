import React, { useEffect, useState } from 'react'

function SingleComments({data}) {
  const [commentsText, setCommentText] = useState('');
  const {text, id} = data;
  useEffect(()=>{
    if (text) {
      setCommentText(text);
    }
  },[text]);
   
  return (
    <div className=''>
    <div className='close' >&times;</div>
        <form className=''>
            <input type='text' value={commentsText}/>
            <input type='submit' hidden/>
        </form>
    </div>
  )
}

export default SingleComments