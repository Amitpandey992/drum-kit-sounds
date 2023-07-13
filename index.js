for(var i = 0; i<document.querySelectorAll(".drum").length; i++){


    //detecting button press

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerhtml = this.innerHTML;
        makeSound(btnInnerhtml);
        BtnAnimation(btnInnerhtml);
    })
}
    //detecting keybord button press

    document.addEventListener("keydown", function(event)  {                                                                                                            
        var keybordKey = event.key;
        makeSound(keybordKey);
        BtnAnimation(keybordKey);
    })
    
    //"event" allows us to tap into the event that triggered the event listner and give all info about that event 


function makeSound(key){
    
    switch (key) {
        case "w":
        var audio =new Audio("sounds/tom-1.mp3");
        audio.play();

            break;
    
        case "a":
        var audio =new Audio("sounds/tom-2.mp3");
        audio.play();
        
          break;


        case "s":
        var audio =new Audio("sounds/tom-3.mp3");
        audio.play();
                
            break;


        case "d":
        var audio =new Audio("sounds/tom-4.mp3");
        audio.play();
        
            break;

        case "j":
        var audio =new Audio("sounds/crash.mp3");
        audio.play();
        
            break;

        case "k":
        var audio =new Audio("sounds/kick-bass.mp3");
        audio.play();
        
             break;

         case "l":
        var audio =new Audio("sounds/snare.mp3");
        audio.play();
    
           break;

           default:
            alert("unrelated key")
           break;
    }
}

function BtnAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);

}