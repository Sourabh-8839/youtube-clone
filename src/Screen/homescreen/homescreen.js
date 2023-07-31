import React, { useEffect } from 'react'
import {Col, Container} from 'react-bootstrap';
import Videoarea from '../../components/videoarea/Videoarea';
import CategoriesBar from '../../components/categorieBar/CategoriesBar';
import { useDispatch, useSelector,  } from 'react-redux';
import { getPopularVideos, getVideoByCategoriesBar,} from '../../redux/action/videos.action';


import InfiniteScroll from 'react-infinite-scroll-component';
import SkeltonVideo from '../../components/skelton/SkeltonVideo';


const Homescreen = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPopularVideos())
    },[dispatch])

    const {videos,activeCategory,loading}=useSelector(state=>state.homevideos)
    const fetchData=()=>{

        if(activeCategory==='All')
        dispatch(getPopularVideos());
        else{
            dispatch(getVideoByCategoriesBar(activeCategory))
        }
    }
  return (
   <Container>
        <CategoriesBar/>
        
        <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            
            Loader={
                <div className="spinner-border text-danger" role="status">
                     <span class="visually-hidden">Loading...</span>
                    </div>
            }
            className='row'
            >
            
            {
               !loading?videos.map((video)=>(
                    <Col lg={4} md={4} key={video.id} >
                    <Videoarea video={video} />
                    </Col>
                ) )
                : [...Array(20)].map(()=>(
                    <Col lg={3} md={4}  >
                    <SkeltonVideo/>
                    </Col>
                ) )
               }
            </InfiniteScroll>
            
   </Container>
  )
}

export default Homescreen
