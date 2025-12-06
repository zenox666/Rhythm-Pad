var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}
//here i attached evntlistener to button so,
// this === button, then this.innnerHTML gives innercontent
function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//here i attached eventlistener to document so,
// this === document ,then this.innerHTML doesn't work
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}
// or
// function makeSound(key) {
//   var sounds = {
//     w: "sounds/tom-1.mp3",
//     a: "sounds/tom-2.mp3",
//     s: "sounds/tom-3.mp3",
//     d: "sounds/tom-4.mp3",
//     j: "sounds/snare.mp3",
//     k: "sounds/crash.mp3",
//     l: "sounds/kick-bass.mp3",
//   };
//   var audio = new Audio(sounds[key]);
//   audio.play();
// }

function buttonAnimation(keyPressed){
    //selecting a button div for changing css when clicked
    var activeButton = document.querySelector("."+keyPressed);
    activeButton.classList.add("pressed");
    //settimeout has two parameters
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}