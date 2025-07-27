document.querySelectorAll(".box") ;
const boxes = document.querySelectorAll(".box") ;
const resetButton = document.querySelector("#resetButton") ;
let msg = document.querySelector(".msg") ;
let result = document.querySelector("#RESULT")

let turn0 = true ;
let count = 0 ;
const victoryPatterns = [
    [0,1,2] ,[3,4,5] ,[6,7,8] ,
    [0,3,6] , [1,4,7] ,[2,5,8] ,
    [0,4,8] , [2,4,6]
] ;
boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
    console.log("button was clicked") ;
    if(turn0 === true ){
        box.innerText = "X" ;
        turn0 = false ;
    } 
    else{
        box.innerText = "O" ;
        turn0 = true ;
    }
    box.disabled = true ;
    count++ ;

    let isWinner = checkVictory() ;
    
    
    if(count === 9 && !isWinner){
        noWinner() ;
    }

    
}) ;
}); 

const disableButton = ( ) => {
    for(let box of boxes ){
        box.disabled = true ;
    }
}

const enableButton = () => {
    for (let box of boxes){
        box.disabled = false ;
        box.innerText = "" ;
    }
}

const showWinner = (winner) => {
    result.innerText = `CONGRATULATIONS !! WINNER IS ${winner}`
    msg.classList.remove("hide") ;
    disableButton() ;
}

const noWinner = () => {
    msg.classList.remove("hide") ;
    result.innerText = `it ends draw ` ;
    
    disableButton() ;
   
}

const checkVictory = () => {
    for (let pattern of victoryPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText ;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3Val = boxes[pattern[2]].innerText ;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= "" ){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("victory for" , pos1Val) ;
                showWinner(pos1Val) ;
                
            }
            
        }
        
    }
}

const resetGame = () => {
    turn0 = true ;
    
    enableButton() ;
    msg.classList.add("hide") ;
    
}

resetButton.addEventListener("click" , resetGame 
)

