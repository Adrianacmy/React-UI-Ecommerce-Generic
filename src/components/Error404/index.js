import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error404.css';


export default function Error404(props){
  return (
    <div className='center'>
      <h4 className={styles.h4}>Not found</h4>
      <img  src='https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxTiN0L7EW5trfOvEk0%2Fgiphy.gif&f=1'/>
    </div>
  );
}


Error404.propTypes = {
  location: PropTypes.object
};