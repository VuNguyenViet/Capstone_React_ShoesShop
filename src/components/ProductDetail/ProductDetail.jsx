import React from "react";

export default function ProductDetail() {
  return (
    <div className="row product-detail">
      <div className="col-4 product-detail__img">
        <img src="https://picsum.photos/400" alt="..." />
      </div>
      <div className="col-7 product-detail__info">
        <h3>Product name</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          molestias, esse at, iste error numquam, rerum deserunt tenetur
          corrupti fuga incidunt dolorum? Alias dolorum nulla eum facilis.
          Facilis, consequuntur natus.
        </p>
        <div className="shoes-sizes">
          <p>Available size</p>
          <span className="shoes-sizes__block">38</span>
          <span className="shoes-sizes__block">38</span>
          <span className="shoes-sizes__block">38</span>
        </div>
        <p className="shoes-price">85$</p>
        <div className="shoes-quantity">
          <button>-</button>
          <span className="mx-3">1</span>
          <button>+</button>
        </div>
        <button className="addToCart">Add to cart</button>
      </div>
    </div>
  );
}
