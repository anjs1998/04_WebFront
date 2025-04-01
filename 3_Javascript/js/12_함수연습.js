//1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의
function fn1(name){
    console.log(`Hello, ${name}`);
}


fn1("안준성");

function fn2(input1, input2){

    console.log(`fn2 : 합은 ${input1 + input2} 입니다`);
}

fn2(1, 2);


const input1 = Number(prompt("첫 번째 값"));
const input2 = Number(prompt("두 번째 값"));
const input3 = Number(prompt("세 번째 값"));
const arr1 = [input1, input2, input3];
const fn3 = (i1, i2) => i1*i2;
console.log(`fn3 : ${ fn3(input1, input2) }`);

const fn4 = (i1, i2) => {return i1 > i2?"첫번째 숫자가 더 큽니다":"두번째 숫자가 더 크거나 같습니다."}

console.log(`fn4 : ${fn4(input1, input2)}`);

function fn5(str){return str.length;}
console.log(`fn5 : ${fn5("뭉탱이로 있다가 유링게슝")}`);

function fn6(str, times){ 
    let res = str;
    for(let i = 1;i < times;i++){ 
        res += str;
    }
    return res;
}
console.log(`fn6 : ${fn6("뭉탱이로 있다가 유링게슝", 6)}`);

function fn7(input){
    return input % 2 == 0?true:false
}
console.log(`fn7 : input1 :${input1}, result:${fn7(input1)}`);

function fn8(i1, i2, i3){
/*
    if(i1 >= i2 && i1 >= i3){ return i1;}
    else if(i2 >= i3 && i2 >= i1){ return i2;}
    else if(i3 >= i1 && i3 >= i2){ return i3;}*/

    //내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
    return Math.max(i1, i2, i3);
}
console.log(`fn8 : ${fn8(input1, input2, input3)}`);

const fn9 = (arr) => arr[0]

console.log(`fn9 : ${ fn9(arr1)}`);

const fn10 = (arr) =>{
    /*
    let sum=0;
    for(element of arr){
        sum += element;

    }*/
    let sum = arr.reduce((acc, curr) => {return acc + curr});
    //배열.reduce() : JS 배열의 메서드로(함수), 배열의 모든 요소를 순회하면서 하나의 결과값을 누적하여 반환
    // 하나의 결과값을 누적하여 반환
    // acc ( accumulator ) : 이전 콜백 호출에서 반환된 값(누산기 - 결과를 누적)
    // curr( currentValue ) : 현재값

    return {"sum:":sum, "avg" :  sum / arr.length};
} 

console.log(`fn10 : sum : ${fn10(arr1).sum} avg : ${ fn10(arr1).avg}`);


function fn11(i1, i2, fn){

    return fn(i1, i2);
}

console.log(`fn11 : ${ fn11(input1, input2, (a, b) => a + b)}`);


function fn12(fn){

    return fn();
}

console.log(`fn12 : ${fn12()}`)