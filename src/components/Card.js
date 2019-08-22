import React, { Component } from 'react';
import axios from 'axios';

import CardTitle from './CardTitle';
import BitcoinPrice from './BitcoinPrice';
import BitcoinVol from './BitcoinVol';
import Bar from './Bar';

export default class App extends  Component {

    state = {
        data: [],
      }
    
    
      intervalID;
    
      componentDidMount() {
        this.getData();
        this.action();
      }
    
      componentWillUnmount() {
        clearTimeout(this.intervalID);
    
      }
    
      getData = () => {
        axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(({data}) => {
           
            this.setState({ data: data.ticker });
    
            this.intervalID = setTimeout(this.getData.bind(this), 15000);
   
    
          }).catch( err => {
             console.log(`ERRO: ${err}`);
          });
    
      }
    
      action = () => {
         
        let price = document.querySelector('.price');
    
          setInterval(() => {
                
              price.style.animation = 'roll 0.4s linear';
    
          }, 15000)
    
          setInterval(() => {
              
              price.style.animation = '';
    
          }, 15500);
    
      }
    



    render(){
        return(
            <div className="card">
                <CardTitle />
                <BitcoinPrice sell={Number(this.state.data.sell).toFixed(2).replace('.',',')}/>
                <BitcoinVol vol={Number(this.state.data.vol).toFixed(2).replace('.',',')}/>
                <Bar />
            </div>
        )
    }
}
    
