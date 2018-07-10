import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Category from './Category';
import Error404 from '../Error404/index';


export default ({ match: { url }, categories }) => {
  return <Fragment>
    <Route exact path={url} render={() => <h3 className='flow-text'>Please select a category</h3>} />
    <Route path={`${url}/:categoryId`}
      render={
        props => {
          const category = { ...categories.find(category => category.id === props.match.params.categoryId) };
          // console.log(category);

          if (!category) {
            return <Error404 />
          }
          return <Category {...props} {...category} />
        }
      } />

  </Fragment>
}

