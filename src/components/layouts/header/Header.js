import React, { Component } from 'react';

import { Carousel } from 'react-materialize';
import ads from '../../assets/images/ads.jpg';
import ads2 from '../../assets/images/ads2.jpg';


export default () => {
  return (
    <Carousel options={{ fullWidth: true, position: 'relative' }} images={[
      ads,
      ads2
    ]} />
  )
}

