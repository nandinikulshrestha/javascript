let userscore = 0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");
const result=document.querySelector("#result");
const newgamebtn=document.querySelector("#new-button");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawgame=()=>{
    msg.innerText=("Game Draw. Play Again!");
    msg.style.backgroundColor="black";
    msg.style.color="white";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compscorepara.innerText=computerscore;
        msg.innerText=`You loose!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
    if(userchoice === compchoice){
        console.log("Game is Draw");
        drawgame();
    }else{
        let userwin=true;
        if(userchoice ==="rock"){
            userwin=compchoice==="paper"? false :true;
        }else if(userchoice === "paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false: true;
        }
        showwinner(userwin,userchoice,compchoice);

    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
newgamebtn.addEventListener("click",()=>{
    userscore="0";
    computerscore="0";
    userscorepara.innerText = "0";
    compscorepara.innerText = "0";
    msg.innerText = "New Game! Make your move.";
    msg.style.backgroundColor = "brown";
    msg.style.color="black";
    result.textContent="";
    console.log("new game start!");
})

