import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
   <div className='login'>
     <p>Email</p>
     <input type="text"  placeholder='Email'/>
     <p>Password</p>
     <input type="password"placeholder='PassWord'/>
     <div className='login_flex'>
       <div className='login_register'>
        <NavLink>Register Now ?</NavLink>
       </div>
       <button className='login_button'>Login</button>
     </div>
     <div>
      <button className='facebook_button'>
        <div className='facebook_icon'>
        <i class="fab fa-facebook "></i> 
        </div>
     
      <p className='fb_text'>Continue With Facebook</p>
      </button>
     </div>
   </div>
  )
}
