// Sum all the numbers 

function sum (number) {
    let total = 0;
    for(let i =1; i <=number; i++){
        total += i;
    }
    return total;
}

var finalResultSum = sum(100);
console.log(finalResultSum);