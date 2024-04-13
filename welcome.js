let loader = document.querySelector(".loading");
let loading1 = document.querySelector(".load");
let welcomeText = document.querySelector(".welcomeText");
let loadingCounter=0;

const load = () => {
    if (loadingCounter <= 100) {
        loader.textContent = loadingCounter+"%";
        loadingCounter++;
        setTimeout(load, 2000/100);
    }
};
load();
function startWelcome (){
    loading1.style.display="none";
    welcomeText.style.display="block";
    var typed = new Typed(".welcomeText",{
        strings: ["WELCOME","TO","MUSICFY."],
        typeSpeed :  50 ,
        loop : false ,
        backSpeed: 20
    })
}
setTimeout(startWelcome,3500);
setTimeout(()=>{
   window.location.href="projet_final.html"
},9000);
