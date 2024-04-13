let changingText = document.querySelector(".changingText");
/*const changingTextList = ["ADVOCATES FOR CHANGE","PIONEERS","CULTURE"];
let currentText = 0;
function changeText(){
    changingText.classList.remove("textChanged") ;
    changingText.textContent=changingTextList[currentText];
    changingText.offsetWidth;
    currentText=(currentText+1)%changingTextList.length;
    changingText.classList.add("textChanged");
}
changeText()
setInterval(changeText,4000);*/


var typedText = new Typed(".changingText",{
    strings: ["ADVOCATES FOR CHANGE","PIONEERS","CULTURE"],
    typeSpeed :  100 ,
    loop : true ,
    backSpeed: 40,
    backDelay : 3000
})