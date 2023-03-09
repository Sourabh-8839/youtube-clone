import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../components/Videohorizontal/VideoHorizontal';
import { getVideoBySearchBar } from '../redux/action/videos.action';

const SearchScreen = () => {

    const {query} =useParams();

    const dispatch=useDispatch();
    
   useEffect(()=>{
      dispatch(getVideoBySearchBar(query))
   },[query,dispatch])

   const {videos,loading}=useSelector(state=>state.searchVideos);

  return (
    <Container>
      {
        !loading?
            videos?.map(video=>
            <VideoHorizontal video={video} key={video.id.videoId} searchscreen/>)
            :
            <SkeletonTheme baseColor='#343a34' highlightColor='#3c4147'>
            <Skeleton width='100%' height='130px' count={15}/>
          </SkeletonTheme>
      }
    </Container>
  )
}

export default SearchScreen
