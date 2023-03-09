import './ChannelScreen.scss';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Videoarea from '../../components/videoarea/Videoarea';
import { getChannelDetails } from '../../redux/action/channel.action';
import { getVideosByChannel } from '../../redux/action/videos.action';

import numeral from 'numeral';

const ChannelScreen = () => {

    const {channelId}=useParams();
    const dispatch=useDispatch();

    useEffect(()=>{
            dispatch(getVideosByChannel(channelId))
            dispatch(getChannelDetails(channelId))
    }
    ,[dispatch,channelId]);

    const {loading,videos}=useSelector(state=>state.channelVideos);

    const{snippet,statistics}= useSelector(state=>state.channelDetails.channel);

    const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus);

    console.log(subscriptionStatus);
  return (

    <>
    <div className='d-flex align-items-center  m-1 p-2 Header'>
    <div className='d-flex align-items-center'>
    <img src={snippet?.thumbnails?.medium?.url} alt=""/>
    <div className='m-2 p-2'>
        <p>{snippet?.title}</p>
        <p>{snippet?.customUrl}</p>
        <p>{numeral(statistics?.subscriberCount).format("0.a")} Subscriber</p>
    </div>
    </div>
    <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && "btn-gray"} `}>{subscriptionStatus?'Subscribed':'Subscribe'}</button>
    </div>
   
    

    
    <Container>
        <Row className='mt-2'>
         {!loading?
        videos.map((video)=>(

            <Col md={4} lg={3}>
                <Videoarea video={video} channelScreen/>
            </Col>
        )
        ):
        [...Array(15)].map(()=>(
            <Col md={4} lg={3}>
            <SkeletonTheme baseColor='#343a34' highlightColor='#3c4147'>
            <Skeleton height={180} />
            </SkeletonTheme>
            </Col>
        ))
        
    }
    </Row>
    </Container>
    </>
  )
}

export default ChannelScreen
