import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


import { Navbar, NavItem, Dropdown } from 'react-materialize';


export default ({ categories }) => {
  return (
    <Navbar left className='indigo lighten-1'>
      <div className='container'>
        <NavItem><Link to='/'>Home</Link></NavItem>
        <Dropdown trigger={
          <NavItem>Categories</NavItem>
        }>
          {categories.map(({ id, name }) =>
            <NavItem key={id} className='blue lighten-1'><Link to={`/categories/${id}`}>{name}</Link></NavItem>
          )}

        </Dropdown>

        <NavItem href='components.html'>About</NavItem>
        <NavItem href='components.html'>Contact</NavItem>

        <ul className='right'>
          <li><a href="#"><i className="material-icons">add_shopping_cart</i></a></li>
          <li><a href="#"><i className="material-icons">account_box</i></a></li>
        </ul>
      </div>
    </Navbar>

  )
}


