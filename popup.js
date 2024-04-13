const allElements = document.querySelectorAll('body *');
let imIn = document.querySelector(".imIn");
let imNotIn = document.querySelector(".imNotIn");
let music = document.querySelector(".music");
let quitSite = document.querySelector(".quitSite");
let firstTime = JSON.parse(sessionStorage.getItem("firstTime")) || true;

if (!sessionStorage.getItem("firstTime")){
    allElements.forEach(e=>{
        if(!e.classList.contains('music')&&!e.classList.contains('doYouWantMusic') 
        &&!e.classList.contains('question')&&!e.classList.contains('answerButtons')
        &&!e.classList.contains('imIn')&&!e.classList.contains('imNotIn')&&!e.classList.contains('quitSite')) {
            e.classList.add('blurOutsidePopup');
            e.style.pointerEvents = "none";
        }
    });
    music.style.display="flex";
    firstTime=false;
    sessionStorage.setItem("firstTime", JSON.stringify(firstTime));

}
else {
    music.style.display="none";
}


imIn.addEventListener("click",function(){
    allElements.forEach(e=>{
        if(!e.classList.contains('music')&&!e.classList.contains('doYouWantMusic') 
        &&!e.classList.contains('question')&&!e.classList.contains('answerButtons')
        &&!e.classList.contains('imIn')&&!e.classList.contains('imNotIn')&&!e.classList.contains('quitSite')) {
            e.classList.remove('blurOutsidePopup');
            e.style.pointerEvents = "auto";
        }
    });
    music.style.display="none";
    playSong();
    window.scrollTo({top:0,behavior:"smooth"});
    observer.observe(targetDiv);
});

imNotIn.addEventListener("click",function(){
    allElements.forEach(e=>{
        if(!e.classList.contains('music')&&!e.classList.contains('doYouWantMusic') 
        &&!e.classList.contains('question')&&!e.classList.contains('answerButtons')
        &&!e.classList.contains('imIn')&&!e.classList.contains('imNotIn')) {
            e.classList.remove('blurOutsidePopup');
            e.style.pointerEvents = "auto";
        }
    });
    music.style.display="none";
    muteImg[1].style.display = " block";
        muteImg[0].style.display = " none";
        muteCurrent=0;    
        mutedSong(0);
        playSong ()
        muteMemory=[1,1,1,1];
        audioList.forEach(e=>{
            e.muted =!e.muted;

        });
        window.scrollTo({top:0,behavior:"smooth"});
        observer.observe(targetDiv);
        
});

document.addEventListener("DOMContentLoaded",function(){
    quitSite.addEventListener("click",function(){
        window.location.href="https://www.Google.com";
    })
    quitSite.addEventListener("mouseover",function(){
        quitSite.style.cursor="pointer";
    })
});
