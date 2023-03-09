import React from 'react'
import './comment.scss'
import moment from 'moment';

const Comment = ({comment}) => {

  const {textDisplay,authorDisplayName,authorProfileImageUrl,publishedAt} =comment

  
  return (
    <div className='comment d-flex p-2'>
         <img src={authorProfileImageUrl} alt="" 
        
        className='rounded-circle m-3'
        />

        <div className='comment_body'>
            <p className='comment_header mb-1 mt-3'>
                {authorDisplayName}  •  {moment(publishedAt).fromNow()} 
            </p>
            <p >
              {textDisplay}  
            </p>

        </div>
      
    </div>
  )
}

export default Comment
