import React, { Component } from 'react';
import PropType from 'prop-type';

import axios from 'axios';
import {Row, Input } from 'react-materialize';

import SearchResults from './SearchResults';

export default class SearchForm extends Component{
  // state = {
  //   searchText: 'beauty',
  //   category: 'beauty1566',
  //   results: []
  // };

  // onCategoryChange = (e) => this.setState({[e.target.name]: e.target.value});

  // onTextChange = (e) => {
  //   const val = e.target.value;
  //   this.setState({ [e.target.name]: val }, () => {
  //     if (val === '') {
  //       this.setState({ results: [] });
  //     } else {
  //       // console.log(this.state.category);
  //       axios
  //       .get(
  //         `http://localhost:8080/categories/${this.state.category}/products?q=${this.state.searchText}`
  //       )
  //       .then(response => this.setState({ results: response.data }))
  //       .catch(err => console.log(err));
  //     }
  //   });
  // };

  constructor(props){
    super(props);
    // const { category, searchText, onCategoryChange, onSearchTextChange } = this.props;

  }
  
  handleSearchTextChange = (e) => this.props.onSearchTextChange(e.target.value)
  handleCategoryChange = (e) => this.props.onCategoryChange(e.target.value)

  render(){
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
                value={this.props.searchText}
                onChange={this.handleSearchTextChange}
                required />
                <Input s={12} m={6} 
                type='select'  
                Value={this.props.category}
                name='category'
                defaultvalue='Garden'
                onChange={this.handleCategoryChange}
                >
                {this.props.categories.map( ({id, name}) => 
                  <option value={id} key={id}>{name? name: 'Garden'}</option>
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
  onSearchTextChange: PropType.func,
  onCategoryChange: PropType.func,
  searchText: PropType.string,
  category: PropType.string,
}

// {this.state.results.length > 0 ? (
//   <SearchResults results={this.state.results} />
// ) : null}