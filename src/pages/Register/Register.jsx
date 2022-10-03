import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Register() {
  // const dispatch = useDispatch ()
  const formik = useFormik ({
    initialValues:{
      email:'',
      password:''
  },
  validationSchema:Yup.object().shape({
    email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
    password: Yup.string().required('Password không được bỏ trống !').min(3,'password từ 3 - 32 ký tự!').max(32,'password từ 3 đến 32 ký tự!'),
    phone: Yup.string().required('Số điện thoại không được để trống !').matches(10, 'Số điện thoại phải đủ 10 số '),
    name: Yup.string().required('Tên không được để trống '),
    // .matches(/cybersoft/,'Password phải có cybersoft')
  })
  ,
  // onSubmit: (values)=>{
  //   // console.log(values)
  //   const action = signinApi(values);
  //   dispatch(action);
  
    
  // }
  })



  return (
    <div className='register'>
      <div className='row'>
        {/* Bên trái  */}
        <div className='col-6'>
          <p>Email</p>
          <input className='input_validation' type="text" placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''} 
          <p>Password</p>
          <input className='input_validation' type="password" placeholder='PassWord' onChange={formik.handleChange}  onBlur={formik.handleBlur} />
          {formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
          <p>Password Confirm</p>
          <input className='input_validation' type="password" placeholder='PassWord' onChange={formik.handleChange}  onBlur={formik.handleBlur} />
          {formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
        </div>
        {/* Bên phải  */}
        <div className='col-6 register_right'>
          <p>Name</p>
          <input className='input_validation' type="text" placeholder='Name' />
          {formik.errors.name ? <p className='text text-danger'>{formik.errors.name}</p> : ''}
          <p>Phone</p>
          <input className='input_validation' type="text" placeholder='Phone' />
          {formik.errors.phone ? <p className='text text-danger'>{formik.errors.phone}</p> : ''}
          <ul className='ul_radio_button'>
            <li className='radio_button'>
              <input style={{width: '20px'}} id="Male" type="radio" name="selector" checked />
              <label style = {{paddingLeft : '10px'}} for="Male">Male</label>
            </li>

            <li className='radio_button'>
              <input style={{width: '20px'}} id="Famale" type="radio" name="selector" />
              <label style = {{paddingLeft : '10px'}}  for="Famale">Famale</label>
            </li>
          </ul>
          <button type='submit' className='Submit_register'> Submit</button>
        </div>
      </div>
    </div>
  )
}
