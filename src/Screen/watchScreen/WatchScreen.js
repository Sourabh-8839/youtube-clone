
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/commentsList/Comments'
import VideoHorizontal from '../../components/Videohorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'

import { getRelatedVideos, getVideoById} from '../../redux/action/videos.action';
import './watchScreen.scss'
const WatchScreen = () => {

   const {id}=useParams();

   const dispatch = useDispatch();

   useEffect(()=>{

    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id));

   },[dispatch,id])

   const {videos,loading:relatedVideosLoading} =useSelector(state=>state.relatedVideos)

   const {video,loading} = useSelector(state=>state.selectedVideo)
   
   const totalComments=video?.statistics?.commentCount;

   
  
  return (
    <Row>
      <Col lg={8}>
            <div className='watchscreen_player'>

            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`}
             title={video?.snippet?.title}
              frameborder="0" 
            allowFullScreen

            ></iframe>
            </div>

            {
              !loading? <VideoMetaData  video={video} videoId={id} />
              : (<h1>Loading.........</h1>)
            }
         
            
            <Comments videoId={id}
            totalComments={totalComments}/>
      </Col>
      <Col lg={4}>
      {
         !loading ?videos?.map((video)=>(
              <VideoHorizontal video={video} key={video.id.videoId}/>
            ))
            : 
            <SkeletonTheme baseColor='#343a34' highlightColor='#3c4147'>
              <Skeleton width='100%' height='130px' count={15}/>
            </SkeletonTheme>
            
      }
      </Col>
    </Row>
  )
}

export default WatchScreen
