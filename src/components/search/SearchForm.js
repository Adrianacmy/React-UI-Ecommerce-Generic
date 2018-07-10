import React, { Component } from 'react';
import PropType from 'prop-type';

import axios from 'axios';
import {Row, Input } from 'react-materialize';

import SearchResults from './SearchResults';

export default class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: 'beauty',
      category: 'beauty1566',
      results: []
    };
  }

  onCategoryChange = (e) => this.setState({[e.target.name]: e.target.value});

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ results: [] });
      } else {
        // console.log(this.state.category);
        axios
        .get(
          `http://localhost:8080/categories/${this.state.category}/products?q=${this.state.searchText}`
        )
        .then(response => this.setState({ results: response.data }))
        .catch(err => console.log(err));
      }
    });
    this.props.onHandleResultsChange(this.state.results);
  };

  render(){
    // const { categories, onHandleResultsChange } = this.props;
    // console.log(categories);
      return (
        <div className="nav-wrapper">
          <form className='container'>
            <div className="input-field">
              <Row>
                <Input 
                placeholder="keywords"
                s={12} m={6}  
                type='search' 
                id='search' 
                name='searchText' 
                onChange={this.onTextChange}
                required />
                <Input s={12} m={6} 
                type='select'  
                defaultValue='beauty1566'
                name='category'
                onChange={this.onCategoryChange}
                >
                {this.props.categories.map( ({id, name}) => 
                  <option value={id} key={id}>{name? name: 'Beauty'}</option>
                )}
                  
                </Input>
              </Row>
              <label className="label-icon" for="search"><i class="material-icons">search</i></label>
            </div>
          </form>
          
      </div>
      );
  }
}

SearchForm.propType = {
  onSearchChange: PropType.func
}


// {this.state.results.length > 0 ? (
//   <SearchResults results={this.state.results} />
// ) : null}