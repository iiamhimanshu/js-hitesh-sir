const myArr = [1,2,3,4,5];

const total = myArr.reduce(function (acc , currval){
    return acc + currval;
},0)

console.log(total);