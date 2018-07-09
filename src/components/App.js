import React, { Fragment }from 'react';

import { Switch, Route, BrowserRouter} from 'react-router-dom';


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
      categories: [],
      results: []
    }
      
  }

async componentDidMount(){
  const categories = await (await fetch('http://localhost:8080/categories?_embed=products')).json()
  
  this.setState({ categories })
}

  render(){
    const { categories } = this.state;
    return <BrowserRouter>
        <Fragment>
          <Navbar categories={categories}/>
          <SearchForm categories={categories} />
          <Header />
          <Switch>
            <Route exact path='/' render={props => <Home { ...props} categories={categories}/>} />
            <Route path='/categories' render={props => <Categories {...props} categories={categories}/>} />
            <Route component={Error404} />
          </Switch>
          <SearchResults />
          <Footer />
        </Fragment>
      </BrowserRouter>
  }
  
}


