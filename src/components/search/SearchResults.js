import React, { Component } from 'react';
import PropType from 'prop-type';

import { Link } from 'react-router-dom';

export default class SearchResults extends Component{

  render(){

    let resultsList;
    const { results } = this.props;

    if (results){
      resultsList = (<div className='row container'>
        {results.map( ({id, title, imageUrl, description, categoryId}) => 
          <Link to={`/categories/${categoryId}/products/${id}`} key={id}>
            <div className='col s12 m3'>
              <div className="card" key={id}>
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
      )}
        </div>);
    }else{
      resultsList = null;
    }

    return (resultsList);
  }
} 

SearchResults.propType = {
  results: PropType.array
}