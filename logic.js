console.log("Welcome to WPM Test Console")

const setOfWords = [ "which few living creatures can do. A nocturnal gecko's eye structure is different from that of other lizards. Most vertebrates have two kinds of cells in their eyes that sense light. These are called rods and cones","We and our partners process your personal data, e.g. your IP-number, using technology such as cookies to store and access information on your device in order to serve personalized ads and content, ad and content measurement, audience insights and product development. You have a choice in who uses your data and for what purposes.","hello you the am i was done the storm have interject in done have want the all prevention  you jazz the increase want read for program os import *" ];

const msg = document.getElementById('msg');
const typeWords = document.getElementById("mywords");
const btn = document.getElementById('btn');

let startTime, endTime;

typeWords.disabled = true;  

const playTest = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber]
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endTest = () =>{
    msg.innerText = ""
    typeWords.innerText = "";

    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log("Your total time is:",totalTime)

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.floor((wordCount / totalTime) * 60);

    let finalMsg = "You typed total at "+speed+" words per minute, Your total time is "+totalTime+", your words are "+wordCount;
    msg.innerText = finalMsg

    console.log("Your word are:",wordCount)
}
const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;

}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false; 
        console.log("Test Started")
        playTest();
    }
    else if (this.innerText == 'Done'){
        typeWords.disabled = true;
        this.innerText = "Start"
        console.log("Test Ended")
        endTest();
    }
})