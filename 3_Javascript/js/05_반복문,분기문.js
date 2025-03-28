function check1(){
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    //주문 개수 카운트
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까쓰

    //prompt로 입력한 값을 저장할 변수 선언

    let input; // undefined


    //javascript의 비교 연산자
    // == (값을 비교하는 연산자)
    // ===(동일 비교 연산자 : 값, 자료형이 모두 같은 경우)
    
    // undefined == null ( ==로 비교시 같은 값이라고 인식됨)
    // undefined === null ( 각각 undefined, object이므로 자료형이 달라 다른 값이라고 인식됨.)

    // === 값과 자료형이 모두 같은경우 true
    // !== 값과 자료형이 모두 다른경우 true
    while(input !== null){ // 취소 누르기 전까지 반복
        input = prompt("메뉴 번호를 입력하세요!");
        switch(input){
            case "1": gCount++; break;
            case "2": rCount++; break;
            case "3": dCount++; break;
            case null:alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력하세요!");


        }
    };

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount + ramen) + (dCount * donkkaseu);

    alert(`총 가격 : ${sum} 원`);
}

function startGame(){
    const answer = Math.floor(Math.random() * 200) + 1;
    
    //정답 시도 회수를 세기 위한 변수 선언
    let count = 0;

    let str = "1부터 200사이 숫자 입력";

    while(true){
        let input = prompt(str)

        if(input === null){
            alert("게임 포기");
            break;

        }

        //숫자 입력 후 확인 클릭 시
        const value = Number(input); //입력받은 값 숫자로 변환

        // 숫자가 아닌 문자열같이 잘못 입력한 경우
        // value에 NaN(Not a Number)이 저장됨.
        //isNaN(값): 값이 NaN이면 true

        if( isNaN(value) ){
            alert("숫자만 입력해 주세요");
            continue;
        }

        if(value < 1 || value > 200){ // 범위 초과
            alert("1~200 사이 값만 작성해주세요");
            continue;

        }

        //정답을 맞추기 위한 시도를 했기 때문에 count를 1 증가
        count++;
        //정답인 경우
        if( value == answer){
            alert(`정답!!! (${answer}) / 시도 횟수 : ${count}`);
            break;
        }
    
        if( value < answer ){
            str = `${value} [UP] / 시도 횟수 : ${count}`;
        } else{
    
            str = `${value} [DOWN] / 시도 횟수 : ${count}`;
        }
    }
    
    
}