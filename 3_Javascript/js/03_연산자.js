const number1 = document.getElementById("input1");
//변수 선언

//document : HTML 문서 내에서
//get : 얻다
//Element : HTML 요소
//ById : 아이디로(아이디가 일치하는)


//console.log(number1);

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

// 두 수를 더해서 화면에 출력하는 함수
function plusFn(){

    //input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;


    console.log(value1, value2);

    // -> input 요소에 작성된 값은 무조건 문자열(string)

    console.log(value1 + value2);

    //[해결방법]
    //문자열을 숫자로 변경하는 코드를 수행
    //숫자만 작성된 문자열("123") 을
    //진짜 숫자타입으로 바꾸는 방법
    // -> Number("123"); --> 123
    console.log(Number(value1) + Number(value2));

    // 두 수의 합을
    // 아이디가 "calcResult" 인 요소(result변수)의
    // 내부 글자(innerText, HTML 요소의 content)로 대입하기
    result.innerText = Number(value1) + Number(value2);


}

//빼기 함수
function minusFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) - Number(value2);
}

//곱하기 함수
function multiFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) * Number(value2);
}

//나누기 함수
function divFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) / Number(value2);
}

//나머지 함수
function modFn(){
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) % Number(value2);
}

function totalFn(){
    const value1 = num1.value;
    const value2 = num2.value;
    const value3 = num3.value;

    total.innerText = Number(value1) + Number(value2) + Number(value3);
    
}