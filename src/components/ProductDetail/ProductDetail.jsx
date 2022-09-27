import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailApiAction } from "../../redux/reducers/productReducer";

export default function ProductDetail() {
  const { productDetail } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const params = useParams();

  const getProductDetailApi = () => {
    const action = getProductDetailApiAction(params.id);

    dispatch(action);
  };

  useEffect(() => {
    getProductDetailApi();
  }, [params.id]);

  console.log(productDetail);

  return (
    <div className="row product-detail">
      <div className="col-4 product-detail__img">
        <img src={productDetail.image} alt={productDetail.alias} />
      </div>
      <div className="col-7 product-detail__info">
        <h3>{productDetail.name}</h3>
        <p>{productDetail.description}</p>
        <div className="shoes-sizes">
          <p>Available size</p>
          {productDetail.size?.map((size, index) => {
            return <span className="shoes-sizes__block">{size}</span>;
          })}
        </div>
        <p className="shoes-price">{productDetail.price}$</p>
        <div className="shoes-quantity">
          <button>-</button>
          <span className="mx-3">{productDetail.quantity}</span>
          <button>+</button>
        </div>
        <button className="addToCart">Add to cart</button>
      </div>
    </div>
  );
}
