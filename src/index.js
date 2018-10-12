import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SweetCoffeeUI from './components/SweetCoffeeUI'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SweetCoffeeMock from './components/SweetCoffeeMock'
import { registerCoffeeMock } from './components/adapter/SweetCoffeeAdapter';

registerCoffeeMock(new SweetCoffeeMock());


class App extends Component {
  render() {
    return (
      <div className="App">
        <SweetCoffeeUI />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
registerServiceWorker();
