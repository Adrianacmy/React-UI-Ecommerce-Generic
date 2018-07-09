import React from 'react';
import styles from './Subscrib.css';

export default () => {
  return (
    <div className='row'>
      <div className='col s12 grey darken-3 center'>
        <p className={`white-text ${styles.sub}`}>Subscrib to get the latest discount! <a href="#">see detail</a></p>
      </div>
    </div>
  );
}