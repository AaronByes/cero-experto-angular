import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart:Product [] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Samsung',
        price: 500
    }
];

const result = taxCalculation({ product: shoppingCart, tax:0.21 });
console.log(result);