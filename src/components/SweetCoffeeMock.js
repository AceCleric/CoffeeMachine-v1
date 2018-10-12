import React, { Component } from 'react';
import {sweetCoffeeAdapter} from './adapter/SweetCoffeeAdapter'


let coffeeAdapter = undefined;

function registerCoffeeAdapter(coffeeAdapterToRegister) {
  coffeeAdapter = coffeeAdapterToRegister;
}

registerCoffeeAdapter(new sweetCoffeeAdapter());

class SweetCoffeeMock {
	constructor()  {
		this.state = coffeeAdapter;
		this.errorState = 0;

		console.warn(this);

	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeAmericano = ( sugar, milk ) => {
		return true;
	}

  makeCoffee = (coffee, sugar, milk) => {
    this.setState({
        selectedCoffee: coffee,
        milkValue: milk,
        sugarValue: sugar,
        coffeeStatus: true
      }), this.checkCoffee(coffee, sugar, milk)
    };

  progressCoffee = (coffee) => {
    setTimeout(function() {
      this.setState({coffeeStatus: false  })
    }.bind(this), Math.random() * 10000);
  }

   checkCoffee = (coffee, sugar, milk) => {
     console.warn('Sugar from checkCoffee', sugar, milk, coffee)
     if (coffee === 'Americano') {
       this.setState({coffeeStatus: true}), this.progressCoffee(coffee)
     }
   }

	 handleMilkValue = (event, milk) => {
	 	this.setState({ milk });
 };

	 handleSugarValue = (event, sugar) => {
	 	this.setState({ sugar });
	};
	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeCapoccino = ( sugar, milk ) => {
		return true;
	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeWienerMelange = ( sugar, milk ) => {
		return true;
	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeChoco = ( sugar, milk ) => {
		return true;
	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeBlackTea = ( sugar, milk ) => {
		return true;
	}

	/*
	 * Sends a command to the coffee machine to start making a drink.
	 * sugar and milk are values between [0,1]
	 */
	makeEarlGray = (sugar, milk) => {
		return true;
	}

	/**
	 * Callback for retrieving error messages, takes callback function as parameter. Setting the callback
	 * tiggers a response in a minute
	 */
	errorCallback = (callback) => {
		this._cbError = callback;

		setTimeout(function() {
			this._cbError(Math.round(Math.random() * 4));
		}, Math.random() * 60000);
	}

	/**
	 * Callback for retrieving ready messages, takes callback function as parameter.  Setting the callback
	 * tiggers a response in a minute
	 */
	readyCallback = (callback) => {
		this._cbReady = callback;

		setTimeout(function() {
			this._cbReady();
		}, Math.random() * 60000);
	}

}

export default SweetCoffeeMock;
