const fp = require('lodash/fp');

const cars = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker C12', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar xkr-s', horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
];

const fn = fp.flowRight(fp.prop('name'), fp.first);

console.log(fn(cars));