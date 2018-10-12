import React, { Component } from 'react';

let coffeeMock = undefined;

function registerCoffeeMock(coffeeMockToRegister) {
  coffeeMock = coffeeMockToRegister;
}

function sweetCoffeeAdapter(WrappedComponent) {
  return class extends Component {
    constructor() {
      super()
      this.state = coffeeMock;
    }

    handleMakeCoffee() {
      coffeeMock.makeCoffee();
    }

    handleMilkChange() {
      coffeeMock.handleMilkValue
    }

    handleSugarChange() {
      coffeeMock.handleSugarValue
    }

    render() {
      console.warn('coffeeMock within the adapter', coffeeMock)
      const props ={
        handleMakeCoffee: () => console.log('handleMakeCoffee'),
        handleMilkChange: coffeeMock.handleMilkValue,
        handleSugarChange: coffeeMock.handleSugarValue,
        coffees: [
          'Americano',
          'wienerMelange',
          'Chocolade',
          'blackTea',
          'earlyGrey'
        ],
        milkValue: 50,
        sugarValue: 0,
        coffeeInprogress: false,
      };
      console.warn("props const within the adapter", props)
      console.warn("All data within the coffeeAdapter", this)

      return(
        <WrappedComponent {...props} {...this.props} />
      )
    }
  }
}

export {
  sweetCoffeeAdapter,
  registerCoffeeMock
}
