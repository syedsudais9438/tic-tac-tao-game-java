let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let turnO = true; // it represent player O 

let WinningMsg = document.querySelector("#winningMsg");

let MsgContainer = document.querySelector(".MsgContainer");

let newGame = document.querySelector("#newGame");

let winningPattern = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];



boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        //console.log("box are clicked");
        if(turnO == true)
        {
          box.innerText = "O"; 
          turnO = false;  // to switch the player 
        }
        else
        {
            box.innerText = "X";  
            turnO = true;
        }
        box.disabled = true;  // to disabled the button to can't print again
        checkWinner(); // check winner function are calling here
    })

})



const checkWinner = () =>{
   // console.log("winner msg");
    for(let pattern of winningPattern ){
       //  console.log(pattern);
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1 != "" && position2 != "" && position3 != "" )
        {
            if(position1 === position2 && position2 === position3)
            {
              //  console.log("you are the winner");
               showWinnerMsg(position1);  // calling show winning function 

            }
        }
    }
}


// definition of this showWinning function here 

const showWinnerMsg = (player) =>{
    WinningMsg.innerText = `Congratulation! Player  ${player}  is the winner`;
    MsgContainer.classList.remove("hide"); // it show the winner msg box
    disabledBoxes(); // calling disabled function here.....
document.body.style.overflow = "hidden";
}


// definition of disabledBoxes function here 
const disabledBoxes = () => {
        for( b of boxes)
        {
            b.disabled = true;  
            
        }

}


const enableBoxes = () => {
    for(enableBox of boxes)
    {
        enableBox.disabled = false;
        enableBox.innerText = "";

    }
}
 
const resetFunction = () =>{
    turnO = true;
    enableBoxes();
    MsgContainer.classList.add("hide");
document.body.style.overflow = "auto"; 
}

newGame.addEventListener("click", resetFunction);  // reset function calling for new game button 
resetBtn.addEventListener("click",resetFunction);  // reset function calling for Reset Game button
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.add("glowO");
        } else {
            box.innerText = "X";
            box.classList.add("glowX");
        }
        box.classList.add("clicked"); // add pop animation
        box.disabled = true;
        checkWinner();
    });
});
