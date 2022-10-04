import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";
import moment from "moment";

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log(userLogin);

  useEffect(() => {
    const action = getProfileApi();

    dispatch(action);
  }, []);
  //?: optional chaining, nếu như object có thuộc tính đó thì xử lý, ngược lại không có thuộc tính dó (undefine) bỏ qua
  //orderHistory = undefine.map ????
  const renderOrderHistory = () => {
    return userLogin?.ordersHistory?.map((order, index) => {
      return (
        <div className="orderDetail" key={index}>
          <p>
            Order has been placed on {moment(order?.date).format("DD/MM/YYYY")}
          </p>
          <table className="table table-borderless carts-content">
            <thead style={{ background: "#ccc" }}>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>img</td>
                <td>price</td>
                <td>quantity</td>
                <td>total</td>
              </tr>
            </thead>
            <tbody>
              {order.orderDetail.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} width={50} alt="..." />
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="ProductFeature">
        <div className="ProductText">
          <h3>Profile</h3>
        </div>
      </div>
      <div className="user-profile row justify-content-between">
        <div className="user-profile__img col-3">
          <img
            style={{ borderRadius: "50%" }}
            className="w-100"
            src={userLogin.avatar}
            alt={`${userLogin.name}-avatar`}
          />
        </div>
        <div className="col-8">
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  value={userLogin.email}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phone">Phone</label>
                <input
                  className="form-control"
                  type="text"
                  id="phone"
                  value={userLogin.phone}
                />
              </div>
            </div>
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={userLogin.name}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  value={userLogin.password}
                />
              </div>
              <div className="form-group d-flex mt-3">
                Gender
                <div className="gender-male mx-3">
                  <input type="radio" id="male" />
                  <label htmlFor="male" className="mx-2">
                    Male
                  </label>
                </div>
                <div className="gender-female">
                  <input type="radio" id="female" />
                  <label htmlFor="female" className="mx-2">
                    Female
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary mt-3"
                style={{ float: "right" }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="order-history">
        <h3 className="mb-3">Order history</h3>
        {renderOrderHistory()}
      </div>
    </div>
  );
}
