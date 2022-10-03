import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Register() {
  const [gender, setGender] = useState(true);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: gender,
      phone: "",
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .required("Số điện thoại không được để trống !")
        .matches(10, "Số điện thoại phải đủ 10 số "),
      name: Yup.string().required("Tên không được để trống "),
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng!"),
      password: Yup.string()
        .required("Password không được bỏ trống !")
        .min(3, "password từ 3 - 32 ký tự!")
        .max(32, "password từ 3 đến 32 ký tự!"),
      // .matches(/cybersoft/,'Password phải có cybersoft')
    }),
    onSubmit: (values) => {
      console.log(values);

      dispatch(signupApi(values));
    },
  });

  return (
    <div className="register">
      <form className="row" onSubmit={formik.handleSubmit}>
        {/* Bên trái  */}
        <div className="col-6">
          <p>Email</p>
          <input
            name="email"
            className="input_validation"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? (
            <p className="text text-danger">{formik.errors.email}</p>
          ) : (
            ""
          )}
          <p>Password</p>
          <input
            name="password"
            className="input_validation"
            type="password"
            placeholder="PassWord"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password ? (
            <p className="text text-danger">{formik.errors.password}</p>
          ) : (
            ""
          )}
          <p>Password Confirm</p>
          <input
            name="passwordConfirmed"
            className="input_validation"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password ? (
            <p className="text text-danger">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        {/* Bên phải  */}
        <div className="col-6 register_right">
          <p>Name</p>
          <input
            id="name"
            className="input_validation"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name ? (
            <p className="text text-danger">{formik.errors.name}</p>
          ) : (
            ""
          )}
          <p>Phone</p>
          <input
            id="phone"
            className="input_validation"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone ? (
            <p className="text text-danger">{formik.errors.phone}</p>
          ) : (
            ""
          )}
          <ul className="ul_radio_button">
            <li className="radio_button">
              <input
                style={{ width: "20px" }}
                id="Male"
                type="radio"
                name="gender"
                checked={gender ? true : false}
                onChange={() => setGender(true)}
              />
              <label style={{ paddingLeft: "10px" }} htmlFor="Male">
                Male
              </label>
            </li>

            <li className="radio_button">
              <input
                style={{ width: "20px" }}
                id="Famale"
                type="radio"
                name="gender"
                checked={!gender ? true : false}
                onChange={() => setGender(false)}
              />
              <label style={{ paddingLeft: "10px" }} htmlFor="Famale">
                Female
              </label>
            </li>
          </ul>
          <button type="submit" className="Submit_register">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
