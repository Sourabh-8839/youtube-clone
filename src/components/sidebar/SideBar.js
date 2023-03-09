
import React from 'react'
import './Sidebar.scss'
import
{
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
}from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/action/auth.action'
import { Link } from 'react-router-dom'
const SideBar = ({sidebar,handleToggleSidebar}) => {

      const dispatch = useDispatch();
      const handlelogOut=()=>{
        dispatch(log_out());
      }
       
  return (
    <nav
     className= {sidebar?"Sidebar open":"Sidebar"}
    onClick={()=>handleToggleSidebar(false)}
    >
     <li>
      <MdHome size={22}/>
      <span>Home</span>
      </li>
    <Link to='/feed/subscriptions'>
      <li>
      <MdSubscriptions size={22}/>
      <span>Subscription</span>
      </li>
    </Link>
     
      <li>
      <MdThumbUp size={22}/>
      <span>Liked Videos</span>
      </li>
      <li>
      <MdHistory size={22}/>
      <span>History</span>
      </li>
      <li>
     
      <MdLibraryBooks size={22}/>
      <span>Library</span>
      </li>
      <li>
      <MdSentimentDissatisfied size={22}/>
      <span>I don't Know</span>
      </li>

      <hr/>
      <li onClick={handlelogOut}>
      <MdExitToApp size={22}/>
      <span>Log Out</span>
      </li>
      <hr/>
    </nav>
      

  )
}

export default SideBar
