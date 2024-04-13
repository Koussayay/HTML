let turningCircles = document.querySelector(".turningCircles");
let circles = turningCircles.children;
circles = Array.from(circles);
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");

document.addEventListener("DOMContentLoaded",function(){

        circles[0].addEventListener("click",()=>{
            window.location.href="Packs.html";
        });
        circles[1].addEventListener("click",()=>{
            window.location.href="artists2.html";
        });
        circles[2].addEventListener("click",()=>{
            window.location.href="Contact.html";
        });
    
    
})
   
circles.forEach((e)=>{
    e.addEventListener("mouseover",function(){
        e.style.cursor ="pointer" ; 
        e.style.animationPlayState="paused";
    })
    e.addEventListener("mouseout",function(){
        e.style.animationPlayState="running";
    })
})



