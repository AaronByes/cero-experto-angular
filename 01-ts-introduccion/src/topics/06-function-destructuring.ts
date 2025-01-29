export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone 12',
    price: 999
};

const tablet: Product = {
    description: 'iPad Pro',
    price: 799
};


const shoppingCard = [phone, tablet];

const tax = 0.21;

interface TaxCalculationOptions {
    product: Product[];
    tax: number;
}

export function taxCalculation(options:TaxCalculationOptions):number[] {
    let total = 0;
    options.product.forEach(product => {
        total += product.price;
    });
    return [total, total * options.tax];
}


const result = taxCalculation({ product: shoppingCard, tax });
console.log(result);

export {};