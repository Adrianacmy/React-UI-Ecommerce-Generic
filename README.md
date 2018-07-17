# Ecommerce-React-UI


By Adrianacmy

## Description

- Simple React UI for generic ecommer site without Redux

![overview](./src/components/assets/images/ecommerce.png)

## Setup/Installation Requirements

- Clone the project.
- To install dependencies, `npm install`
- To run the project, `npm start`
- To Build production, `npm run build`
- This project is working with json server, if your port 8080 is unavailable, please change to other ports in package.json at `"start": "react-scripts start & json-server --watch store.json --port 8080",` 
- Json server will be live at `http://localhost:8080/`
- If there were errors while installing json server, try to upgrade npm to latest version with ``npm install -g npm@latest``

## User stories

- User can navigate to different categories
- User can search products with any keywords
- User can serach products with any keywords and categories 
- User can navigate to different product detail page


## Known Bugs

- The SearchResults components can not display at the right spot which is below the header

## Technologies focused

- Javascript
- React
- Webpack
- SCSS
- Babel
- react-materialize
- json-server



## This software is licensed under the MIT license.

*Copyright (c) 2018 Adrianacmy*