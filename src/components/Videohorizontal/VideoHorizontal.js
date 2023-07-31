import React, { useEffect, useState } from 'react'
import './VideoHorizontal.scss'


import moment from 'moment';
import numeral from 'numeral';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import request from '../../api';
import { useNavigate } from 'react-router-dom';


const VideoHorizontal = ({video,searchscreen,subScreen}) => {

  const {id,
    snippet:{publishedAt,title,thumbnails:{medium}
      ,channelTitle,channelId,description,resourceId}}=video;

 
const isVideo = !(id.kind==="youtube#channel" || subScreen);

const [views,setviews]=useState(null);

const [duration,setduration]=useState(null);

const [channelIcon,setchannelIcon]=useState(null);


  useEffect(()=>{
    const  get_video_details=async()=>{
  const {data:{items}}=await request('/videos',{
        params:{
          part:'contentDetails,statistics',
          id:id?.videoId,
        }
        
      })
     
      setduration(items[0].contentDetails.duration);

      setviews(items[0].statistics.viewCount);
      
    }
    if(isVideo)
      get_video_details();
    
   },[id,isVideo]);


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

 

  const seconds=moment.duration(duration ).asSeconds();

  const _duration=moment.utc(seconds*1000).format("mm:ss");

  const _channelId= resourceId?.channelId || channelId ;

  const navigate=useNavigate()

  const handleClick=()=>{
    isVideo?navigate(`/watch/${id.videoId}`):
     navigate(`/channel/${_channelId}`)
    
  }

  const thumbnail=  !isVideo && "video_horizontal_thumbnail-channel";
  return (
    <Row className='video_horizontal m-1 py-1 align-items-start' onClick={handleClick}>
    
      <Col xs={6} md={searchscreen ||subScreen ?4:6} className='video_horizontal_left'>

       
      <LazyLoadImage src={medium.url} effect='blur'
      
      className={`video_horizontal_thumbnail ${thumbnail}`}

      wrapperClassName='video_horizontal_thumbnail-wrapper'
      />
    { isVideo &&  <span className='video_horizontal_top_duration'>{_duration}</span>
    }
      
      </Col> 
      <Col xs={6} md={searchscreen || subScreen?8:6} className='video_horizontal_right'>
             <p className='video_horizontal_title mb-1'>{title} </p>

            {isVideo &&  <p className='video_horizontal_details'> 
              {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
             </p>}

            {(searchscreen || subScreen) &&<p className='video_horizontal_description'>{description}</p>}

             <div className='video_horizontal_channel d-flex align-items-center my-1'>

             {isVideo&& (<LazyLoadImage src={channelIcon?.url} alt=""/>)}
              <p className='pt-3'>{channelTitle}</p>
             </div >

             <p>{
                video?.contentDetails?.totalItemCount
             }
             </p>
             
      </Col> 
      
    </Row>
  )
}

export default VideoHorizontal
