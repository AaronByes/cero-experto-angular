function addNumbers(a:number, b:number):number {
    return a + b;
}

addNumbers(1,2);


const total:string = addNumbers(1,2).toString();

console.log(total);



const addNumbersArrow = (a:number, b:number):string => `${a} + ${b} = ${a + b}`;


console.log(addNumbersArrow(1,2));



function multiply( firstNumber:number, secondNumber?:number, base:number = 10 ) {
    return firstNumber * base;
}

const multiplyResult:number = multiply(2,3,10);

console.log(multiplyResult);

export{};