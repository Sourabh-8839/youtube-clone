import React,{ useState } from 'react'
import './categories.scss'

import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideoByCategoriesBar } from '../../redux/action/videos.action'

const Keywords=[
    'All',
    'React js',
    'Angular js',
    'React of Native',
    'Use of Api',
    'Computer of programming',
    'javascript',
    'html',
    'Css',
    'Movies',
    'Bollywood Music',
    'Hollywood Music',
    'Street Food',
    'Football'

]
const CategoriesBar = () => {
    const [activeElement,setactiveElement]=useState('All')

    const dispatch=useDispatch();

    const handleClick=(value)=>{
      setactiveElement(value)
      if(value==='All'){
        dispatch(getPopularVideos());
      }
      else{
      dispatch(getVideoByCategoriesBar(value));
    }
  }

    
  return (
    <div className='CategoriesBar'>
      {Keywords.map((value,i)=>(
       <span
       
       onClick={()=>handleClick(value)}
       key={i}
       className={activeElement===value ? 'active':''}
       >{value}</span> 
      ))}
    </div>
  )
}

export default CategoriesBar
