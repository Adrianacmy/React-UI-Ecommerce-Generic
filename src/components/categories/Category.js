import React, { Component, Fragment } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Error404 from '../Error404/index';
import Product from '../products/Product';

export default ({ match: {url}, name, description, products }) =>
  // console.log(props)||
  <Fragment>
    <div className='container'>
    <h3>{ name }</h3>
    <p>{  description }</p>

    <div className='row'>
      {products?products.map( ({id, title, imageUrl, description}) => 
        <Link to={`${url}/products/${id}`}>
         
          <div className='col s12 m3'>
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator responsive-img" src={imageUrl} style={{padding: '20px'}}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
              <p>{description}</p>
            </div>
            
          </div>
          </div>
        </Link>
    ): <Redirect to='/' />}

      </div>
    </div>

    <Route path={`${url}/products/:productId`} render={
      props => {
        const product = products?products.find(({id}) => id === props.match.params.productId): ''
        if (! product){
          return <Error404 />
        }
        return <Product {...product} />
      }
      
    }/>
  
  </Fragment>


  // may need it later
// <div className="card-reveal">
//   <span className="card-title grey-text text-darken-4">Flavors<i className="material-icons right">close</i></span>
//   <p>Here is some more information about this product that is only revealed once clicked on.</p>
// </div>