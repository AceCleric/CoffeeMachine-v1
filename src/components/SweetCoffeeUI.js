import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { sweetCoffeeAdapter }  from './adapter/SweetCoffeeAdapter';

class SweetCoffeeUI extends Component {
  render() {
    const {
      handleMakeCoffee,
      handleMilkChange,
      handleSugarChange,
      coffees,
      milkValue,
      sugarValue,
      coffeeInProgress,
      disableOptions = false,
      disableMilk = false,
      disableSugar = false,
    } = this.props;

    console.warn(this);

    return(
      <div className="coffeebar">
        <Grid container spacing={24} >
          {
            coffees.map(coffee =>
              <Grid item xs={4}>
                <button onClick={ () => handleMakeCoffee(coffee, sugarValue, milkValue) } className={disableOptions}>{coffee}</button>
              </Grid>
            )
          }
          {/* <Grid item xs={4}>
            <button onClick={ () => this.handleMakeCoffee(cappucinno, sugarValue, milkValue) } className={disableCappucino}>{cappucinno}</button>
          </Grid> */}

          </Grid>
          <Grid container spacing={24}>
          <Grid item xs={6}>
            <label>MELK in %</label>
            <Slider value={ milkValue } step={1} aria-lavelledby="label" disabled={disableMilk} onChange={ () => handleMilkChange() } />
          </Grid>
          <Grid item xs={6}>
            <label>SUIKER in %</label>
            <Slider value={ sugarValue } step={1} aria-lavelledby="label" disabled={disableSugar} onChange={ () => handleSugarChange(sugarValue) } />
          </Grid>
          <Grid item xs={12}>
            <label className="status">{ coffeeInProgress }</label>
          </Grid>
          </Grid>
      </div>
    )
  }
}


// class SweetCoffeeUI extends Component {
//   render() {
//     const {
//       milkValue,
//       sugarValue,
//       selectedCoffee,
//       coffeeStatus,
//     } = this.state;
//
//     const coffees = [
//       'Americano',
//       'wienerMelange',
//       'Chocolade',
//       'blackTea',
//       'earlyGrey',
//      ];
//
//      console.warn(this)
//
//      const cappucinno = 'Cappuccinno';
//
//      const disableOptions = (coffeeStatus === true && selectedCoffee) ? "disable" : " ";
//      const coffeeInprogress = (coffeeStatus === true) ? `making ${selectedCoffee}`: 'Klaar voor gebruik';
//      const disableMilk = (milkValue === 0 ) ? true : false;
//      const disableSugar= (sugarValue === 0 ) ? true : false;
//
//      const disableCappucino = (disableMilk === true || disableSugar === true || coffeeStatus === true) ? 'disable' : ''
//
//     return (
//       <div className="coffeebar">
//         <Grid container spacing={24} >
//           {
//             coffees.map(coffee =>
//               <Grid item xs={4}>
//                 <button onClick={ () => this.sweetCoffeeAdapter.makeCoffee(coffee, sugarValue, milkValue) } className={disableOptions}>{coffee}</button>
//               </Grid>
//             )
//           }
//           <Grid item xs={4}>
//             <button onClick={ () => this.makeCoffee(cappucinno, sugarValue, milkValue) } className={disableCappucino}>{cappucinno}</button>
//           </Grid>
//           </Grid>
//           <Grid container spacing={24}>
//           <Grid item xs={6}>
//             <label>MELK in %</label>
//             <Slider value={ milkValue } step={1} aria-lavelledby="label" disabled={disableMilk} onChange={ this.handleMilkChange } />
//           </Grid>
//           <Grid item xs={6}>
//             <label>SUIKER in %</label>
//             <Slider value={ sugarValue } step={1} aria-lavelledby="label" disabled={disableSugar} onChange={ this.handleSugarChange } />
//           </Grid>
//           <Grid item xs={12}>
//             <label className="status">{ coffeeInprogress }</label>
//           </Grid>
//           </Grid>
//       </div>
//       );
//    }
// }

export default sweetCoffeeAdapter(SweetCoffeeUI);
