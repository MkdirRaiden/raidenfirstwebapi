let myLabel = document.getElementById("myLabel");

updateTime();
setInterval(updateTime, 1000)
function updateTime(){
    let date = new Date();
    myString = formatTime(date);
    console.log(myString); 
    document.getElementById("hour").innerHTML = myString.slice(0, 2);  
    document.getElementById("minute").innerHTML = myString.slice(3, 5);  
    document.getElementById("second").innerHTML = myString.slice(6, 8);  
    document.getElementById("dayOrNight").innerHTML = myString.slice(9);  
    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours % 12 ? 'pm': 'am';
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

const myCollection =document.getElementsByClassName('number');
for(let i=0; i<=myCollection.length;i+=1 ){
    setTimeout(function interval(){
        myCollection[i].style.animationPlayState = "running";
        myCollection[i].style.display = "block";
    }, (i+1)*1000);
}
myImages =Array.from(document.getElementsByClassName("backgroundImage"));
for(let i = 0; i < myImages.length; i++){    
    myImages[i].addEventListener("click", imageClicked);        
    function imageClicked(){      
        if(i==0){
            document.body.style.backgroundImage = "url('./images/princess11.jpg')";       
        }    
        else if(i==1){
            document.body.style.backgroundImage = "url('./images/princessAeolin01.jpg')";         
        }
        else if(i==2){
            document.body.style.backgroundImage = "url('./images/princessYan02.jpg')";         
        } 
        else if(i==3){
            document.body.style.backgroundImage = "url('./images/princessYan03.jpg')"; 
        }
        else{
            document.body.style.backgroundImage = "url('./images/iceprincess20.jpg')";         
        }       
    }       
}

const content = document.getElementById("content");
function contentVisibility(){
    content.style.visibility = "hidden";
}
const container4 = document.getElementById("container4");
const ticTacToeGame = document.getElementById("ticTacToeGame");
const ticTacToeGameContainer = document.getElementById("ticTacToeGameContainer");
const cells = document.querySelectorAll(".cell");
const playersTurn = document.querySelector("#playersTurn");
const restartBtn = document.querySelector("#restartBtn");
const quitBtn = document.querySelector("#quitBtn");
const winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [3, 4, 5],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
ticTacToeGameContainer.style.visibility = "hidden";
ticTacToeGame.addEventListener("click", ()=>{
    contentVisibility();
    container4.style.visibility = "hidden";
    ticTacToeGameContainer.style.visibility = "visible";
    initializeGame();
})
quitBtn.addEventListener("click", ()=>{
    ticTacToeGameContainer.style.visibility = "hidden";
    restartGame();
    running = false;
    content.style.visibility = "visible";
    container4.style.visibility = "visible";
})
function initializeGame(){
    running = true;
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    playersTurn.textContent = `${currentPlayer}'s turn`;
    
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    changePlayer(); 
    checkWinner();  
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X")? "O" : "X";
    playersTurn.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let whoWin = null;
    let roundOne = false;
    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundOne = true;
            whoWin = cellA;
            break;
        }
    }
    if(roundOne ){
        playersTurn.textContent = `${whoWin} Wins!`;
        running = false;
    }
    else if(!options.includes("")){
        playersTurn.textContent = `Draw!`;
        running = false;
    }
    else{
        return;
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    playersTurn.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

