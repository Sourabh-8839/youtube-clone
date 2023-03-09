import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import VideoHorizontal from '../../components/Videohorizontal/VideoHorizontal';
import { getSubscriptionChannel } from '../../redux/action/videos.action';

import './subscriptionscreen.scss';
function SubscriptionScreen() {

  const dispatch =useDispatch();

  useEffect(()=>{

    dispatch(getSubscriptionChannel());
  },[dispatch]);
  

  const {loading,videos}=useSelector(state=>state.subscriptionchannels);

  return (
      <Container fluid>
        {
        !loading?videos.map(video=><VideoHorizontal video={video} id={video.id} subScreen/>)
        :
        <SkeletonTheme baseColor='#343a34' highlightColor='#3c4147'>
              <Skeleton width='100%' height='130px' count={15}/>
            </SkeletonTheme>
      }
      </Container>
      
    
  )
}

export default SubscriptionScreen
