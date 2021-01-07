alert("You have 10 guesses. Guess my age!")

var answer= 15;
var guess= prompt("What's your guess");

for(i=0;i<10;i++){
  if(answer==guess){
     alert("You gueesed correctly");
     break;
  }else{
    guess=prompt("Please try again")
   }
  
}
