import React, { useEffect, useState } from 'react';
import './Videoarea.scss';
import {useNavigate} from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai'
import request from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import moment from 'moment';
import numeral from 'numeral';
const Videoarea = ({ video,channelScreen}) => {

  const {id,snippet:{
    channelId,
    channelTitle,
    title,
    publishedAt,
    thumbnails:
    {medium},
  },
  contentDetails,
}=video


  const navigate = useNavigate();

const [views,setviews]=useState(null);

const [duration,setduration]=useState(null);

const [channelIcon,setchannelIcon]=useState(null);

 const seconds= moment.duration(duration).asSeconds();

 const _duration= moment.utc(seconds*1000).format("mm:ss");

 const videoId=id?.videoId || contentDetails?.videoId || id;


 const handleVideoClick=()=>{
        navigate(`watch/${videoId}`);
 }

  useEffect(()=>{
    const  get_video_details=async()=>{
  const {data:{items}}=await request('/videos',{
        params:{
          part:'contentDetails,statistics',
          id:videoId,
        }
        
      })
     
      setduration(items[0].contentDetails.duration);

      setviews(items[0].statistics.viewCount);
      
    }
    get_video_details();
    
   },[videoId])

   useEffect(()=>{
    const  get_channel_icon=async()=>{
  const {data:{items}}=await request('/channels',{
        params:{
          part:'snippet',
          id:channelId,
        }
        
      })
     
      setchannelIcon(items[0].snippet.thumbnails.default);
    }
    
    get_channel_icon();
    
   },[channelId])

   
  return (
    <div className='Video' onClick={handleVideoClick}>
      <div className='Video_top'>
        {/* <img src={medium.url} alt="" /> */}
          <LazyLoadImage  src={medium.url} effect='blur' />
        <span className='Video_top_duration'>{_duration}</span>
      </div>
      <div className='Video_title'>

        {title}
      </div> 
      <div className='Video_details'>
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
          
        </span>
        <span>
          {moment(publishedAt).fromNow()}
        </span>
      </div>
      {!channelScreen &&<div className="Video_channel">
      
        <LazyLoadImage src={channelIcon?.url} effect='blur'/>
        <p>{channelTitle}</p>
     
      </div>
}
    </div>
  )
}

export default Videoarea
