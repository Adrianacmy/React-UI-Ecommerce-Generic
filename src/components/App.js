import React, { Fragment }from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import axios from 'axios';

import Error404 from './Error404/index';
import SearchForm from './search/SearchForm';
import SearchResults from './search/SearchResults';
import Categories from './categories';
import {Navbar, Header, Footer} from './layouts';
import Home from './home/Home';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchText: '',
      category: '',
      categories: [],
      products: []
    }
      
  }
  
    handleSearchTextChange = (searchTextn) => this.setState({ searchText: searchTextn });
    handleCategoryChange = (categoryn) => this.setState({ category: categoryn });

    // handleSearch = (prop, url) => {
    //   axios.get(url).then(res => this.setState({prop: res.data}));
    // }
    
  componentDidMount(){
    const urlC = 'http://localhost:8080/categories?_embed=products';
    axios.get(urlC).then(res => this.setState({categories: res.data}));
  }

  render(){
    if (this.state.searchText && this.state.category){
      // http://localhost:8080/categories/beauty1566/products?q=home
      const url = `http://localhost:8080/categories/${this.state.category}/products?q=${this.state.searchText}`;
      axios.get(url).then(res => this.setState({products: res.data}));
    }
    return <BrowserRouter>
        <Fragment>
         <Navbar categories={this.state.categories}/>
          <SearchForm 
          searchText={this.state.searchText} 
          category={this.state.category}
          onSearchTextChange={this.handleSearchTextChange}
          onCategoryChange={this.handleCategoryChange} 
          categories={this.state.categories}
          />
          <Header />
          <SearchResults results={this.state.products} />
          <Switch>
            <Route exact path='/' render={props => <Home { ...props} categories={this.state.categories}/>} />
            <Route path='/categories' render={props => <Categories {...props} categories={this.state.categories}/>} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
  }
  
}


// <Route path='/categories' render={props => <Categories {...props} categories={results}/>} />
