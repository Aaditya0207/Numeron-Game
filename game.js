// Iteration 2: Generate 2 random number and display it on the screen
// Iteration 3: Make the options button functional

let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
var score = 0;


let number1=Math.round(Math.random()*100);
console.log(number1)

let number2=Math.round(Math.random()*100);
console.log(number2)


num1.innerText=number1;
num2.innerText=number2;


var greaterthan =document.getElementById("greater-than");
greaterthan.onclick=function(){
    if(number1>number2){
        score++
        number1=Math.round(Math.random()*100);
        number2=Math.round(Math.random()*100);
        num1.innerText=number1;
        num2.innerText=number2;

        resetTime(timerId)
    }else {
        location.href='./gameover.html'
    }
}

var equalto =document.getElementById("equal-to");
equalto.onclick=function(){
    if(number1==number2){
        score++
        number1=Math.round(Math.random()*100);
        number2=Math.round(Math.random()*100);
        num1.innerText=number1;
        num2.innerText=number2;


    resetTime(timerId)
      
    }else {
        location.href='./gameover.html'
    }
}


var lesserthan =document.getElementById("lesser-than");
lesserthan.onclick=function(){
    if(number1<number2){
        score++
        number1=Math.round(Math.random()*100);
        number2=Math.round(Math.random()*100);
        num1.innerText=number1;
        num2.innerText=number2;

        resetTime(timerId)
    }else {
        location.href='./gameover.html'
    }
}
// Iteration 4: Build a timer for the game
var timer =document.getElementById("timer");
var time = 5;
var timerId;

function showtimer(){
    time=5;
    timer.innerText=time
    timerId=setInterval(()=>{
    time--
    if(time==0){
        location.href='./gameover.html'
    }

    timer.innerText=time;

    localStorage.setItem('score',score)
    },1000)
}

function resetTime(timerId){
    clearInterval(timerId)
    showtimer()
}

showtimer()