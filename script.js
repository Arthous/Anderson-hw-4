var $startBtn = startbtn = document.getElementById("start");
var questionsEL = document.getElementById("questions");
var choicesEl= document.getElementById("choices");
var questiontitleEL= document.getElementById("Question-title");
var questionOne = document. getElementById("q1");
var questionTwo = document. getElementById("q2");
var questionThree = document. getElementById("q3");
// var time=questions.length*15
// var timerID

var questions=[
    {
        title:"What is HTML used for?", 
        choices:[
            "used to create links","used to style your web page","used to create and stucture web pages"
        ],
        answer:"used to create and structure web pages"
    },
    {
        title:"What is CSS used for?",
        choices:[
            "used for backend design", "used to design your webpage", "used to combine your locale storage"
        
        ],
        answer:"used to design your Webpage"
    },


     {
        title:"What is Javascript",
        choices:[
            "used to create variables", "used to add color to webpage", "used to make web page interactive"
        ],
        answer:"used to make web page interactive"
    },
]




function startquiz(){
    var startscreenEL=document.getElementById("start-screen")
    startscreenEL.setAttribute("class","hide")
    questionsEL.removeAttribute("class")
 timerID=setInterval(timerclock,1000)
 getquestions()
}


function timerclock(){

}


function startQuiz(event){
    event.currentTarget.classList.add("hidden");
    document.getElementById("q1").classList.remove("hidden");

}
console.log("sdasd" + $startBtn);
$startBtn.onclick= startQuiz;

function q1(event){
    event.currentTarget.classList.add("hidden");
    document.getElementById("q2").classList.remove("hidden");
}
console.log("asdw" + questionOne);
questionOne.onclick = q1;

function q2(event){
    event.currentTarget.classList.add("hidden");
    document.getElementById("q3").classList.remove("hidden");
}
console.log("ssw" + questionTwo);
questionTwo.onclick = q2;

function q3(event){
    event.currentTarget.classList.add("hidden");
    document.getElementById("highscore").classList.remove("hidden");
}
console.log("asdw" + questionThree);
questionThree.onclick = q3;

function savehighscore(){
    
    
}

