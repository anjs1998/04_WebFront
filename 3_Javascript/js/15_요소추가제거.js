//요소.remove() : 요소 제거

//공통적으로 사용되는 요소를 전역 변수 선언

const addBtn = document.querySelector("#add"); // 추가버튼
const calcBtn = document.querySelector("#calc"); // 계산버튼

const container = document.querySelector(".container");//div
//동적으로 만들어진 요소를 최종적으로 붙여야하는 요소

//추가버튼 클릭시 
addBtn.addEventListener("click", () => {

    /*
         <div class="row">
                <input type="number" class="input-number">
                <span class="remove-row">&times;</span>
            </div>
    
    */ 

    // 1. div 요소 생성하기
    const row = document.createElement("div"); // <div></div>

    //2. row 요소에 class 추가하기

    row.classList.add("row"); //<div class = "row"> </div>

    // 3. input 요소 생성하기
    const input = document.createElement("input");
    input.setAttribute("type", "number"); // < input type = "number">

    // 4. type = "number" 추가하기
    // input.type = "number";
    input.setAttribute("type", "number"); // < input type = "number">

    //5. 클래스 "input-number" 추가하기
    //input.setAttribute("class", "test");

    input.classList.add("input-number");

    //6. span 요소 생성하기
    const span = document.createElement("span"); //<span></span>

    //7. span태그에 클래스"remove-row" 추가
    span.classList.add("remove-row"); // <span class="remove-row"><span>

    //8. 내용으로 &times; 추가 (innerHTML 사용)
    span.innerHTML = "&times;"; // 안에도 세미콜론을 둘것. 여기선 리렌더링 이루어지지 않음

    //9. div.row 요소에게 자식으로 input, span추가

    row.append(input, span);

    //10.완성된 div.row를 container의 마지막 자식으로 추가
    container.append(row);

    /*************************************** */

    //클릭된 x 버튼의 부모 요소를 제거
    //1. 만들어진 x버튼(span)에 이벤트 리스너 추가
    span.addEventListener("click", (e) =>{

        //2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의
        //부모 요소를 선택(탐색)

        const parent = e.target.parentElement; //div.row
        //3. 부모 요소를 제거하기

        parent.remove();
    });

    
});

//-----------------------------

//계산 버튼 클릭시

calcBtn.addEventListener("click", () => {
    //1) 모든 .input - number 요소 얻어오기
    const numbers = document.querySelectorAll(".input-number");

    //2) for문으로 모든 요소 접근하여 작성된 값(value)을 얻어와
    //숫자로 변경(Number()) 한후
    //합계 저장 변수 sum에 누적

    let sum = 0;
    for(let i=0; i < numbers.length; i++){

        sum += Number(numbers[i].value);
    }

    // 3) for문 끝나면 alert 결과 출력
    alert("결과 : ", sum);


});