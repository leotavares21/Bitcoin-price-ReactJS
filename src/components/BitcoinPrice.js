import React from 'react';


const BitcoinPrice = props => <h1><small className="sifra">R$</small><span className="price">{props.sell.substr(0,2) + '.' + props.sell.substr(2, 7)}</span></h1>

export default BitcoinPrice;