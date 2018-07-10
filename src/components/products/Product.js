import React, { Fragment } from 'react';
import PropType from 'prop-type';


export default function Product({ title, imageUrl, description, price }){
  return (
    <Fragment>
    <div className='container'>
      <hr />
      <h3>{title}</h3>
      <h4>$ {price}</h4>
      <img src={imageUrl}/>
      <p>{description}</p>
      </div>
    </Fragment>
  );
}

Product.propType = {
  title: PropType.string,
  imageUrl: PropType.string,
  description: PropType.string,
  price: PropType.number,
  
}