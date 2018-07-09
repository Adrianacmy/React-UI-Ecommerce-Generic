import React, { Component, Fragment } from 'react';

export default ({ title, imageUrl, description, price }) =>
  <Fragment>
  <div className='container'>
    <hr />
    <h3>{title}</h3>
    <h4>$ {price}</h4>
    <img src={imageUrl}/>
    <p>{description}</p>
    </div>
  </Fragment>