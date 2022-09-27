import React from "react";

export default function ProductDetail({ productDetail }) {
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
          <div className="shoes-sizes__blocks">
            {productDetail.size?.map((size, index) => {
              return (
                <span className="shoes-sizes__block" key={index}>
                  {size}
                </span>
              );
            })}
          </div>
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
