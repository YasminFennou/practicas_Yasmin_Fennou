/**
 * capturo los botones
 */
const cronoButtons = document.querySelector('.crono__buttons');
const cronoSeconds = document.querySelector('.crono__seconds');
const cronoCentiSeconds = document.querySelector('.crono__miliseconds');
let counterSeconds = 0;
let counterCentiSeconds = 0;
let cronoIntevral = "";
let isRunning = false; 



/**
 * Description of function
 * @param {*} seconds 
 * @param {*} centiseconds 
 */

function showInHTML(seconds, centiseconds){
    cronoSeconds.innerHTML = seconds;
    cronoCentiSeconds.innerHTML = centiseconds;
}

/**
 * This function stops interval start in startCrono
 */

function startCrono() {
    if(!isRunning){
        cronoIntevral = setInterval(() => {
            counterCentiSeconds++;

            if (counterCentiSeconds === 100){
                counterSeconds += 1;
                counterCentiSeconds = 0;
            }
            
           showInHTML(counterSeconds, counterCentiSeconds)
         
        }, 10);
    }

    isRunning = true;
}
/**
 * This function stops interval start in startCrono
 */

function stopCrono(){
    clearInterval(cronoIntevral);
    isRunning = false; 
}
/**
 * This function starts the cronometer at zero 
 */

function zeroCrono(){
    counterSeconds = 0;
    counterCentiSeconds = 0;
     showInHTML(0 , 0)
    isRunning = false; 
}
 

//llamadas a funcion, eventos,etc
cronoButtons.addEventListener('click', function(e){
    e.target.value === "start" && startCrono();
    e.target.value === "stop" && stopCrono();
    e.target.value === "zero" && zeroCrono();
});