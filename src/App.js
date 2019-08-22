import React, { Component, Fragment } from 'react';
import './App.css';

import BitcoinCard from './components/BitcoinCard';



export default class App extends Component{

  render(){
    return(
      <Fragment>
        <BitcoinCard />
      </Fragment>
    )
  }
}


