//add numbers
function addNum(num1, num2, num3, num4){
    var sum = 0;
for(let i = 0; i<arguments.length; i++){
    sum += arguments[i];
}
    return sum;
}


//muiltiply numbers
function multiplyNum(num1, num2, num3, num4){
    var sum = 1;
for(let i = 0; i<arguments.length; i++){
    sum *= arguments[i];
}
    return sum;
}
