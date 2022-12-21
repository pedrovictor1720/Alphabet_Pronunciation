document.addEventListener("keydown", function(event){
    makeSound(event.key);
});


function makeSound(key){
    document.querySelector("h2").innerText = key;
    switch(key){
        case key:
            var tom1 = new Audio("sounds/"+key+".wav");
            tom1.play();
            break;
    }
}