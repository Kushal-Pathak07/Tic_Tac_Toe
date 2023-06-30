let turn = 'X';
let count = 0;
let isgameover = false;
let sound_x = new Audio("sounds/sound_x.mp3");
let sound_0 = new Audio("sounds/sound_0.mp3");
let sound_win = new Audio("sounds/win.wav");

//Function to change the turn
function changeTurn()
{
    if(turn == 'X'){return '0';}
    else{return'X';}
}

//Check for Tie
function checkTie() {
    if (count === 9 && !isgameover) 
    {
        
        document.getElementsByClassName("turn")[0].innerText = "It's a tie!";
    }
}

//function to check for win
function checkWin()
{
    let boxText = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    for(let i = 0; i < wins.length; i++)
    {
        let [a,b,c] = wins[i];
        if(boxText[a].innerText === boxText[b].innerText &&
            boxText[b].innerText === boxText[c].innerText &&
            boxText[a].innerText !== "")
        {
            isgameover = true;
            sound_win.play();

            boxes[a].style.backgroundColor = "rgb(242, 217, 239)";
            boxes[a].getElementsByClassName('boxtext')[0].style.backgroundColor = "rgb(242, 217, 239)";

            boxes[b].style.backgroundColor = "rgb(242, 217, 239)";
            boxes[b].getElementsByClassName('boxtext')[0].style.backgroundColor = "rgb(242, 217, 239)";

            boxes[c].style.backgroundColor = "rgb(242, 217, 239)";
            boxes[c].getElementsByClassName('boxtext')[0].style.backgroundColor = "rgb(242, 217, 239)";
            
            document.querySelector(".turn").innerText=boxText[a].innerText+" Won !!!";
        }
    }
}

//function to pressing reset button
function reSetGame()
{
    let boxKaMaal = document.getElementsByClassName("boxtext");
    Array.from(boxKaMaal).forEach(element =>{
        element.innerText='';
        element.style.backgroundColor = '';
        element.parentElement.style.backgroundColor = '';
    });
    count = 0;
    isgameover = false;
    turn = 'X';
    document.getElementsByClassName("turn")[0].innerText = "Turn for "+turn;
}
document.querySelector("#btn").addEventListener('click' , reSetGame);

//Logic of Game
let boxes = document.getElementsByClassName("box");
for(let i = 0; i < boxes.length; i++)
{
    let boxtext = boxes[i].querySelector(".boxtext");
    boxes[i].addEventListener('click',()=>{
        if(isgameover== false && boxtext.innerText === '')
        {
            count++;
            boxtext.innerText = turn;
            if(turn == 'X'){sound_x.play();}
            else{sound_0.play();}
            turn = changeTurn(turn);
            checkWin();
            if(! isgameover)
            {
                document.getElementsByClassName("turn")[0].innerText = "Turn for "+turn;
            }
            checkTie();
        }
    })
}
