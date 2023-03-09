import {legacy_createStore,applyMiddleware,combineReducers} from 'redux';


import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'

import {authReducer} from './reducer/auth.reducer'
import { ChannelDetailsReducer } from './reducer/channel.reducer';
import { CommentsReducer } from './reducer/comments.reducer';
import { homeVideoReducers, RelatVideoReducer, SearchVideosReducers, SelectedVideoReducer, SubscriptionChannelReducers, VideoChannelReducers } from './reducer/videos.reducer';

const rootreducer=combineReducers({
    auth:authReducer,
    homevideos:homeVideoReducers,
    selectedVideo :SelectedVideoReducer,
    channelDetails:ChannelDetailsReducer,
    commentList:CommentsReducer,
    relatedVideos:RelatVideoReducer,
    searchVideos:SearchVideosReducers,
    subscriptionchannels:SubscriptionChannelReducers,
    channelVideos:VideoChannelReducers,
})

const store=legacy_createStore(
    rootreducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
    )


export default store;