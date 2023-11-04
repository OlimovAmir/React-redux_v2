import React from 'react'
import SingleComments from './SingleComments'

function Comments(props) {

    console.log('comments: ', props)
  return (
    <div className='card-comments'>
        <form className='comments-item-create'>
            <input type="text" />
            <input type="submit" hidden/>
        </form>
        <SingleComments/>

    </div>
  )
}

export default Comments