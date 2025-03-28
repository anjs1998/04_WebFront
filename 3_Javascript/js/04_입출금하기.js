//prompt 사용 연습


const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input
let balance = 10000; // 잔액 기록 변수(초기값 10000)
const pw = '1234'; // 비번 저장변수

output.innerText = balance;


//입금 함수
function deposit(){
    //input에 입력된 금액 구하기
    if (amount.value.length == 0){
        alert("금액을 입력해주세요");
    }else{
        balance += Number(amount.value);
    }
    output.innerText = balance;
}
//출금 함수
function withdrawal(){
    const password = prompt("비밀번호를 입력하세요");
    console.log(password);
    if(password == ""){ 
        alert("취소");
    }else{
        if(password == '1234' ) {

            if (amount.value.length == 0){
                alert("금액을 입력해주세요");
            }else{
                balance -= Number(amount.value);
            }
            output.innerText = balance;

            //alert(Number(amount.value) + "원이 출금되었습니다. 남은 잔액"+balance);
            alert(`${Number(amount.value)}원이 출금되었습니다. 남은 잔액 ${balance} `); 
            //템플릿 리터럴 :
            //백틱(``)을 사용하여 문자열을 감싸고, ${} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식

        }else{alert("비밀번호 불일치");} 
    }

}


function test(){
    const password = prompt("비밀번호를 입력하세요");
    //prompt : 값을 입력할 수 있는 alert창

    //확인 -> 입력한 값이 문자열로 저장
    //취소 -> null



    console.log(password);

    if(password == null){
        alert("취소");
    }else{
        if(password == '1234' ) {alert("비밀번호 일치");
        }else{alert("비밀번호 불일치");} 
    }

}
