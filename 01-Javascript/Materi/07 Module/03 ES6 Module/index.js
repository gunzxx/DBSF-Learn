import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';

console.log(stock);
console.log(isCoffeeMachineReady);

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(stock);