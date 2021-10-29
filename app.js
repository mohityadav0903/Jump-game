var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var highscore=0;

audio = new Audio('music.mp3');

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}function start(){
block.classList.add("blockani")
audio.play();
audio.currentTime = 20;
counter=0;

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        // block.style.animation = "none";
        block.classList.remove('blockani');
      audio.pause();
      audio.currentTime = 20;
        alert("Game Over. score: "+Math.floor(counter/100)+"\nClick start again");
        counter=0;
        document.getElementById("scoreSpan").innerHTML =counter;
       
        // block.style.animation = "block 1s infinite linear";  
       clearInterval(checkDead);

    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);   
 
    }
}, 10);
}


window.addEventListener("keydown",a=>{
     switch (a.key)
         {
     case "ArrowUp":jump();
    break;
     default:
                break;
 }
    })