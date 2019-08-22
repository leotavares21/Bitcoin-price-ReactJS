import React from 'react';

import CardTitle from './CardTitle';
import BitcoinPrice from './BitcoinPrice';
import BitcoinVol from './BitcoinVol';
import Bar from './Bar';

const Card = () => (
    
    <div className="card">
        <CardTitle />
        <BitcoinPrice />
        <BitcoinVol />
        <Bar />
    </div>

)

export default Card;