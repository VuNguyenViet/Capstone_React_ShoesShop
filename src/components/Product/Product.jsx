import React from 'react'

export default function Product({ product }) {

  // const {product}=props;
  return (
    <div style={{width:'335px'}} className='card'>
      <img style={{ backgroundColor: '#F8F8F8' }} src={product.image} alt='...' />
      <div className='card-body'>
        <p style={{fontheight: 600}}>{product.name}</p>
        <p>{product.shortDescription}</p>
      </div>
      <div class="p4-footer">
        <div style= {{fontWeight:'200', fontSize: '24'}} class="p4-footer_buynow">
          <div class="buynow">Buy Now</div>
        </div>
        <div style={{fontWeight:'600', fontSize:'24'}} class="p4-footer_price">
          <div class="price">{product.price}$</div>
        </div>
      </div>
    </div>
  )
}
