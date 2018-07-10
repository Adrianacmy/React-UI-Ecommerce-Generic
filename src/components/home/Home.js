import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Category from '../categories/Category';
import Error404 from '../Error404/index';


export default ({ match: { url }, categories }) => {
  // console.log(props);
  return <Fragment>

    <div className='container'>
      <Route exact path={url} render={() => <h2 className='flow-text'>Please Select A Category</h2>} />
      <ul>
        {categories.map(({ id, name }) =>
          <li key={id}><Link to={`/categories/${id}`}><h4 className='flow-text'>{name}</h4></Link></li>
        )}
      </ul>

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
    </div>

  </Fragment>
}
