import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { signinApi } from '../../redux/reducers/userReducer'
     
import  FacebookLogin from 'react-facebook-login'




export default function Login(props) {


  const responseFacebook = (response) => {
    console.log(response) ;
  }

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
      password: Yup.string().required('Password không được bỏ trống !').min(3, 'password từ 3 - 32 ký tự!').max(32, 'password từ 3 đến 32 ký tự!')
      // .matches(/cybersoft/,'Password phải có cybersoft')
    })
    ,
    onSubmit: (values) => {
      // console.log(values)
      const action = signinApi(values);
      dispatch(action);


    }
  })



  return (
    <form className='login' onSubmit={formik.handleSubmit}>
      <p>Email</p>
      <input type="text" id="email" name='email' placeholder='Enter Your Email' className='Login_padding' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}
      <p>Password</p>
      <div className='password'>
        <input type="password" placeholder=' Enter your PassWord' className='Login_padding' id="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
        <button className='eye'>
          <i class="fas fa-eye-slash"></i>
        </button>

      </div>

      <div className='login_flex'>
        <div className='login_register'>
          <NavLink to="/Register">Register Now ?</NavLink>
        </div>
        <button type='submit' className='login_button'>Login</button>
      </div>
      <div>
      <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />,
      </div>
    </form>
  )
}


<button className='facebook_button'>
          <div className='facebook_icon'>
            <i class="fab fa-facebook "></i>
          </div>
          <p className='fb_text'>Continue With Facebook</p>
        </button>