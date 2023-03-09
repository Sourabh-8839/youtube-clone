import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/action/auth.action'

import {useNavigate} from 'react-router-dom'
import'./LoginScreen.scss'





const LoginScreen = () => {
  
  const dispatch = useDispatch()

  const accessToken = useSelector(state=>state.auth.accessToken)

  const handlelogin=()=>{
    dispatch(login())
  } 
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(accessToken){
      navigate('/')
    }

  },[accessToken,navigate])
      
  return (
   <div className="login">
    <div className="login_container">
        <img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.png" alt="" />
        <button onClick={handlelogin}>Login With Google</button>
        <p>This Project made using YOUTUBE DATA API</p>
        </div>
   </div>
  )
}

export default LoginScreen
