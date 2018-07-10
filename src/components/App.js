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
    this.handleResultsChange = this.handleResultsChange.bind(this);
      
  }

async componentDidMount(){
  const categories = await (await fetch('http://localhost:8080/categories?_embed=products')).json()
  
  this.setState({ categories })
}

handleResultsChange(newResults){ this.setState({results: newResults})}

render(){
  // console.log(this.state.results);
    const { categories } = this.state;
    return <BrowserRouter>
        <Fragment>
          <Navbar categories={categories}/>
          <SearchForm categories={categories} onHandleResultsChange={this.handleResultsChange}/>
          <Header />
          <SearchResults results={this.state.results}/>
          <Switch>
            <Route exact path='/' render={props => <Home { ...props} categories={categories}/>} />
            <Route path='/categories' render={props => <Categories {...props} categories={categories}/>} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
  }
  
}


