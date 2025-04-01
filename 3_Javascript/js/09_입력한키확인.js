const boxes = document.querySelectorAll(".key-box > .key");
const boxq = boxes[0];
const boxw = boxes[1];
const boxe = boxes[2];
const boxr = boxes[3];
//화면(문서자체)에서 키가 눌러지는걸 감지했을 때
//div에는 eventListener를 설정할수 없다.
document.addEventListener("keydown", function(e){
    console.log(e.key);
    let idx;
    switch(e.key){
        case 'q': case 'Q': {boxq.style.backgroundColor = "deepPink"; break;}
        case "w": case 'W': {boxw.style.backgroundColor = "deepPink"; break;}
        case 'e': case 'E': {boxe.style.backgroundColor = "deepPink"; break;}
        case 'r': case 'R': {boxr.style.backgroundColor = "deepPink"; break;}
        default : return;
    }  
/*
    switch(e.key){
        case 'q': case 'Q': {idx = 0; break;}
        case "w": case 'W': {idx = 1; break;}
        case 'e': case 'E': {idx = 2; break;}
        case 'r': case 'R': {idx = 3; break;}
    }  
        boxes[idx].style.backgroundColor = "deepPink";
     */  
});


document.addEventListener("keyup", function(e){
    console.log(e.key);
    //e.key.toLowerCase()
    switch(e.key){
        case 'q': case 'Q': {boxq.style.backgroundColor = "white"; break;}
        case "w": case 'W': {boxw.style.backgroundColor = "white"; break;}
        case "e": case 'E': {boxe.style.backgroundColor = "white"; break;}
        case "r": case 'R': {boxr.style.backgroundColor = "white"; break;}
    }  
       
});

function changeKeyColor(e, color){
                    // e : 이벤트 종류 객체
                    // color : 색상
    const keyMap = { 'q' : 0, 
                'w' : 1, 
                'e' : 2, 
                'r' : 3};

    const idx = keyMap[e.key.toLowerCase()];
        //keyMap['q'] -> 0
        //keyMap['w'] -> 1
        //keyMap['e'] -> 2
        //keyMap['r'] -> 3
        //keyMap의 index에 없는 값이 입력되었을때( = qwer 이외의 값이 입력되었을때 idx는 undefined)
        if(idx != undefined){

            keys[idx].style.backgroundColor = color;
            //keys[idx] 요소 배경색을 매개변수로 전달받은 color 변경
        }

}

//키가 눌렸을때 실행
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink") );
document.addEventListener("keyup", (e) => changeKeyColor(e, "deepPink") );