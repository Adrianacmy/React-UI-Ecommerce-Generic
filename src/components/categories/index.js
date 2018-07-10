import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropType from 'prop-type';


import Category from './Category';
import Error404 from '../Error404/index';


export default function Categories({ match: { url }, categories }){
  return <Fragment>
    <Route exact path={url} render={() => <h3 className='flow-text'>Please select a category</h3>} />
    <Route path={`${url}/:categoryId`}
      render={
        props => {
          const category = { ...categories.find(category => category.id === props.match.params.categoryId) };
          if (!category) {
            return <Error404 />
          }
          return <Category {...props} {...category} />
        }
      } />
  </Fragment>
}

Categories.protoType = {
  categories: PropType.array,
  match: PropType.object
}