import React, { useEffect, useState } from 'react'

import './comments.scss'

import Comment from '../Comment/Comment'
import { addComments, getComments } from '../../redux/action/comments.action'
import { useDispatch, useSelector } from 'react-redux'

function Comments({videoId,totalComments}) {

  

  const comments =useSelector(state=>state.commentList.comments);

  const _comments = comments?.map(comments=>comments.snippet.topLevelComment.snippet);
  

  const dispatch =useDispatch();

  useEffect(()=>{

    dispatch(getComments(videoId));
  },[dispatch,videoId])

const [text,setText]  =useState('');


  const handleComment=(e)=>{

    e.preventDefault();

    if(text.length ===0)
      return

        dispatch(addComments(videoId,text));

        setText('');
  }

  
  
  return (
    
    <div className='comments'>
      
      <p>{totalComments} Comments</p>

      <div className='comment_form d-flex '>
        <img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.png" alt="" 
        
        className='rounded-circle m-3'
        />
        <form  onClick={handleComment}  className='d-flex flex-grow-1'>
        <input  className=' flex-grow-1' placeholder='Write a Comment'
        value={text}
        onChange={e=>setText(e.target.value)}
        >
        </input>

        <button  className='border-0 p-2'>Comment</button>
        </form>
       
      </div>

      <div className='comments_list'>
        {
         _comments?.map((comment,i) =>(
           <Comment comment={comment} key={i}/>

         ))
        }
      </div>
    </div>
  )
}

export default Comments
