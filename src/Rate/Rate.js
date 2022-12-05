import './Rate.css';
import React from 'react';

import Calc from '../Calc/Calc';

var myHeaders = new Headers();
myHeaders.append("apikey", "MIy3yYYDdAkx9YskhFuXE5E5yBUrcyqq");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
    this.getRate();
  }

  

  getRate = () => {
    fetch('https://api.apilayer.com/fixer/latest?base=EUR&symbols=USD,RUB,CAD,PHP',requestOptions)
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data);
      this.setState({date : data.date});
      let result = {};
      for (let i = 0; i < this.currency.length; i++) {
        result[this.currency[i]] = data.rates[this.currency[i]];
      }
      console.log(result);
      this.setState( {currencyRate : result});
    });
  }

  render() {
    return (
      <div className="rate">
        <h3> Курс валют на { this.state.date }</h3>
          <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => 
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
              <p> * Можно купить за 1 EUR</p>
            </div>
          )
          )}
          </div>
          <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
