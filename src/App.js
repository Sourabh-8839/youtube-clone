import React, { useEffect, useState } from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/SideBar';

import Homescreen from './Screen/homescreen/homescreen';
import { Container } from 'react-bootstrap';

import './app.scss';

import { Route,Routes,Navigate, useNavigate} from 'react-router-dom';
import LoginScreen from './Screen/loginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import WatchScreen from './Screen/watchScreen/WatchScreen';
import SearchScreen from './Screen/SearchScreen';
import SubscriptionScreen from './Screen/subscriptionscreen/SubscriptionScreen';
import ChannelScreen from './Screen/ChannelScreen/ChannelScreen';


const Layout = ({ children }) => {

  const [sidebar, Togglesidebar] = useState(false);

  const handleToggleSidebar = () => Togglesidebar(value => !value);
  return (

    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app_container'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () => {

  const {accessToken,loading} = useSelector(state=>state.auth)

  const navigate = useNavigate()
  useEffect(()=>{

    if(!loading && !accessToken){
      navigate('/login')
    }

  },[accessToken,loading,navigate])

  return (
    
      <Routes>
        <Route path='/'element={<Layout>
            <Homescreen />
          </Layout>}/>
          
        

        <Route path='/login' element={<LoginScreen />}/>

        <Route path='*' element={<Navigate replace to='/'/>}/>
        <Route path='/watch/:id' element={<Layout> <WatchScreen /></Layout>}/>
        
        <Route path='/feed/subscriptions' element={<Layout><SubscriptionScreen/></Layout>}/>
        <Route path='/channel/:channelId' element={<Layout><ChannelScreen/></Layout>}/>
        <Route path='/search/:query' element={<Layout><SearchScreen/></Layout>}>

          
        </Route>
        </Routes>
    
  )
}

export default App
