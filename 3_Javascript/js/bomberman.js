
//let box = document.querySelector("#box");
    // box. innerHTML += 을 실행하는 과정에서DOM이 리렌더링된다. 그 과정에서 bomberman을 가리키던 전역변수를 잃어버리기 때문에 작동하지 않는다.
    //  기존변수 bbman은 더이상 유효한 DOM 요소가 아니기 떄문에 스타일 변경이 적용됨
    //따라서 전역변수에 쓰지말고 addEventListener에 쓸것.
let x = 0;
let y = 0;


document.addEventListener("keydown", function(e){
    console.log(e);
    
    const bbman = document.querySelector("#box > img");
    switch(e.key){
        case 'ArrowLeft':  x -= 10; break;
        case 'ArrowRight': x += 10; break;
        case 'ArrowDown':  y += 10; break;
        case 'ArrowUp':    y -= 10; break;
        case 'x': createBomb(x,y); break; 
        case 'z': detonateAllBomb();break;
    }
    bbman.style.transform = `translate(${x}px, ${y}px)`;
    // bbman = document.querySelector("#box > img");
});

function createBomb(x, y){
    box.innerHTML +=
    `<img class = "bomb" 
    style=" transform : translate(${x}px, ${y}px);
     position:absolute;"
      src="../../images/bomb.png" > `;//position : absolute 중요!!!!
    // box. innerHTML += 을 실행하는 과정에서DOM이 리렌더링된다. 그 과정에서 bomberman을 가리키던 전역변수를 잃어버리기 때문에 작동하지 않는다.
    //  기존변수 bbman은 더이상 유효한 DOM 요소가 아니기 떄문에 스타일 변경이 적용됨
    //따라서 전역변수에 쓰지말고 addEventListener에 쓸것.
    tempBomb = document.querySelector("#box > .bomb:last-of-type");
    tempBomb.style.transform = `translate(${x}px, ${y}px)`;//style = "position : absolute"를 꼭 쓸것
    console.log(`${x}, ${y}`);
}

function detonateAllBomb(){

    const tempBombs = document.querySelectorAll("#box > .bomb");
    for(let tempBomb of tempBombs){
        tempBomb.style.backgroundImage = `src = "../../images/boomm.png" no-repeat`;// 왜 안되지?
        tempBomb.src =  "../../images/boomm.png";
    }
    
}