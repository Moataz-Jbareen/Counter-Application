document.getElementById("increment").addEventListener("click", incrementcounter);
document.getElementById("decrement").addEventListener("click", decrementcounter);
document.getElementById("reset").addEventListener("click", resetcounter);


let counterDisplayed = document.getElementById("counter-d");

let counterValue=0;

function updateCounterDisplay(){
    counterDisplayed.textContent = counterValue;

}



function incrementcounter(){
    counterValue++;
    updateCounterDisplay()
}



function decrementcounter(){

    if(counterValue>0){
        counterValue--;
        updateCounterDisplay()
    }
    
}

function resetcounter(){
    counterValue=0;
    updateCounterDisplay()
}