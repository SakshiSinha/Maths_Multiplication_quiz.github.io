var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("submit").onclick=function(){
    if(playing==true){
     location.reload();
    }
    else{
        score=0;
        playing=true;
 document.getElementById("scorevalue").innerHTML=score;
//document.getElementById("timeremaining").style.display="block";
show("timeremaining");
        
   timeremaining=60;

document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    
    //HIDE THE GAME OVER BLOCK
hide("gameover");
        
    //change the buttion to reset
document.getElementById("submit").innerHTML="Reset Game";
    
//countdown
    startcountdown();
    
    //GENERATE QUESTION AND MULTIPLE  ANSWERS
   QA();
     }
}


//if we click answer box
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    //if we are playing
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            //increase score
            score++;
document.getElementById("scorevalue").innerHTML=score;
            show("correct");
            hide("wrong");
            setTimeout(function(){
                hide("correct");
            },1000);
            QA();
        }
         else{
          show("wrong");
            hide("correct");
            setTimeout(function(){
                hide("wrong");
            },1000);
    }
    }
   
}
}




//START THE COUNTER
function  startcountdown(){
    
    action=setInterval(function(){
        timeremaining-=1;
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
  
        //IF time remaining is zero game will over
        if(timeremaining==0){
            stopcountdown();
//document.getElementById("gameover").style.display="block";
show("gameover");
document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>Your score is "+score +".</p>";

  hide("timeremaining");
  hide("correct");
  hide("wrong");
                 playing=false;
document.getElementById("submit").innerHTML="Start Game"
        }
  },1000);
}






//STOP THE COUNTER
function stopcountdown(){
    clearInterval;
    
}

//To HIDE ANY ID ELEMENT
function hide(Id){
 document.getElementById(Id).style.display="none";
}

//To SHOW ANY ID ELEMENT
function show(Id){
 document.getElementById(Id).style.display="block";
}

//QA function
function QA(){
  var x= 1+ Math.round(10*Math.random());  
  var y= 1+ Math.round(10*Math.random());
   // var x=Math.round(Math.random(1,10));
    //var y=Math.round(Math.random(1,10));
    console.log(x); 
    console.log(y); 
  correctAnswer=x*y;
    
       //console.log(correctAnswer); 
 document.getElementById("question").innerHTML= x + "X" + y;

  var correctPosition=1+ Math.round(3*Math.random());
     console.log("position is "+correctPosition); 
     console.log("Answer is "+correctAnswer); 
//FILL ONE BOX WITH CORRECT OPTION
document.getElementById("box"+ correctPosition).innerHTML=correctAnswer;
    //FILL ONE BOX WITH WRONG OPTION
//Will create array so that no to wrong answer are same to all wrong answer will first come to array and then will be checked
    var arr=[correctAnswer];
    console.log(arr);
     //FILL ONE BOX WITH WRONG OPTION
    for(i=1;i<5;i++){
        if(i !== correctPosition ){
var wronganswer;
    
//There can be chance that any one wrong answer can be equal to correct answe so will use while loop
    do{
          wronganswer= (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
console.log(wronganswer);       
        
    }
while(arr.indexOf(wronganswer)>-1)
    
document.getElementById("box"+i).innerHTML=wronganswer;
  arr.push(wronganswer);
//            console.log(arr);
        }
    }
}