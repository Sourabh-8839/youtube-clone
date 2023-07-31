import React, { useEffect } from 'react'
import './VideoMetaData.scss'

import numeral from 'numeral';

import moment from 'moment';
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
import ShowmoreText from 'react-show-more-text';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/action/channel.action';
import { useNavigate } from 'react-router-dom';



const VideoMetaData = ({video:{snippet,statistics},videoId}) => {

const {title,channelId,publishedAt,description,channelTitle}=snippet;

const {likeCount,viewCount}=statistics;


const {snippet:channelSnippet ,statistics:channelStatistics} =useSelector(state=>state.channelDetails.channel);


    const dispatch =useDispatch();

    useEffect(()=>{
            dispatch(getChannelDetails(channelId))
            dispatch(checkSubscriptionStatus(channelId))
    },[dispatch,channelId])


    const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus)

     const navigate=useNavigate();

    const handleClick=()=>{
            navigate(`/channel/${channelId}`);
    }

  return (
   <div className="VideoMetaData py-2">

   
    <div className="VideoMetaData_top">
        <h5>{title}</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
            <div>
        <span>
         {numeral(viewCount).format("0.a")} Views •
          {moment(publishedAt).fromNow()}
        </span>
        </div>

        <div className='m-3'>
            <span><MdThumbUp size={26}/>
            {numeral(likeCount).format("0.a")}
            </span>
            <span className='m-3'>
                <MdThumbDown size={26}/>
                {numeral(1000).format("0.a")}
            </span>
            </div>
        </div>  
     </div>
    <div className="VideoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className='d-flex'>
            <img 
            onClick={handleClick}
            src={channelSnippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle mr-3'
            />
            <div className='d-flex flex-column'>
                <span className='mr-3'>{channelTitle}</span>
                <span className='mr-3'>  {numeral(channelStatistics?.subscriberCount).format("0.a")}  subscriber</span>
            </div>
          </div>
          <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-gray'}`}>{subscriptionStatus?'Subscribed':'Subscribe'}</button>
    </div>
    <div className="VideoMetaData_description">
       <ShowmoreText
       lines={3}
       more='Show More'
       less='Show Less'
       className='content-css'
       anchorClass='showMoreText'
       expanded={false}
       >
       {description}
   
        </ShowmoreText>
    </div>
   </div>



  )
  
}

export default VideoMetaData
