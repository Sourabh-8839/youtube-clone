import React, { useState } from 'react'
import'./header.scss';

import { FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
function Header({handleToggleSidebar}) {

  const [input,setInput]=useState('');

  const navigate =useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();

    navigate(`/search/${input}`);
  }

  return (
   
  <div className='header'>
      <div className='header_left'>
        <FaBars className='header_menu' size={22}
        onClick={()=>handleToggleSidebar()}
        />
        <img className="header_logo" 
        src='https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.png' alt='' />
      </div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' size={24} value={input}
         onChange={e=>setInput(e.target.value)}></input>
        <button id='Search_icon' type='Submit'>
          <AiOutlineSearch  size={22}/>
        </button>
        </form>
      <div className='header_Icons'>
        {/* <i class="fa-sharp fa-solid fa-video"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i> */}
        <MdNotifications size={24}/>
        <MdApps size={24}/>
        <img id="user_id"src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg' alt='avtar' />
      </div>
  </div>
   
  )
}

export default Header