let songList = document.querySelector(".songList");
let songs = document.querySelectorAll(".songList img");
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");
const songContainer = document.querySelector("songContainer");
let songNameList = ["FIRST PERSON SHOOTER","LIKE THAT", "FEIN" , "IT'S A BAD IDEA RIGHT?"];
let artistNameList =["JCOLE, DRAKE","METRO BOOMIN, FUTURE ft KENDRICK LAMAR", "TRAVIS SCOTT", "OLIVIA RODRIGO"];
let artistName = document.querySelector(".artist");
let songName = document.querySelector(".songNameDiv");
let audioList = document.querySelectorAll(".audio");
let muteButton = document.querySelector(".muteButton");
let muteImg = document.querySelectorAll(".muteButton img");
let current = 1 ;
let muteCurrent = 1;
let muteMemory=[0,0,0,0];
windowIndex = "Login";
changingSong();
changingArtist();
songList.addEventListener('wheel', function(event) {
    if (event.deltaX !== 0) {
        event.preventDefault();
    }
});
const imgWidht = document.body.clientWidth   ;
nextButton.addEventListener('click', () => {
    if(current==songs.length){
        return;
    }
    songList.scrollBy({left:imgWidht, behavior: "smooth" });
    current++;
    if (muteMemory[current-1]==1){
        muteImg[1].style.display = " block";
        muteImg[0].style.display = " none";
        muteCurrent=0;    
        mutedSong(0);
    }
    else {
        muteImg[0].style.display = " block";
        muteImg[1].style.display = " none";
        muteCurrent=1;  
        mutedSong(1);
    }
    if (current==songs.length){
        nextButton.style.display ="none"
    }
    if(current!=1){
        prevButton.style.display="block";
    }
    playSong();
    changingSong();
    changingArtist();

})
prevButton.style.display ="none";
prevButton.addEventListener('click', () => {
    if(current==1){
        return;
    }
    songList.scrollBy({left:-imgWidht, behavior: "smooth" });
    current--;
    if (muteMemory[current-1]==1){
        muteImg[1].style.display = " block";
        muteImg[0].style.display = " none";
        muteCurrent=0;    
        mutedSong(0);
    }
    else {
        muteImg[0].style.display = " block";
        muteImg[1].style.display = " none";
        muteCurrent=1;  
        mutedSong(1);
    }
    if (current==1){
        prevButton.style.display ="none";
    }
    if (current!=songs.length){
        nextButton.style.display ="block";
    }
    playSong();
    changingSong();
    changingArtist();
    
})
function playSong () {
    audioList.forEach(function(e){e.pause();});
    audioList[current-1].play();
}
var audio = audioList[current-1];
audio.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play(); 
});




function changingSong(){
    songName.classList.add('fadeOut');
    songName.classList.add('fadeOut');
    setTimeout(function(){
    songName.innerText = songNameList[current-1];
    songName.classList.remove('fadeOut');
    songName.classList.add('fadeIn');
    setTimeout(function() {
        songName.classList.remove('fadeIn');
      }, 500);},500);

}
function changingArtist(){
    artistName.classList.add('fadeOut');
    artistName.classList.add('fadeOut');
    setTimeout(function(){
    artistName.innerText = artistNameList[current-1];
    artistName.classList.remove('fadeOut');
    artistName.classList.add('fadeIn');
    setTimeout(function() {
        artistName.classList.remove('fadeIn');
      }, 1000);},1000);

}
muteButton.addEventListener("click",()=>{
    audioList[current-1].muted = !audioList[current-1].muted;
    if (muteCurrent==1){
        muteImg[1].style.display = " block";
        muteImg[0].style.display = " none";
        muteCurrent=0;    
        mutedSong(0);
        muteMemory[current-1]=1;
    }
    else{
        muteImg[0].style.display = " block";
        muteImg[1].style.display = " none";
        muteCurrent=1;  
        mutedSong(1);
        muteMemory[current-1]=0;
    }
   

})
function mutedSong(i){
    songName.classList.add('fadeOut1');
    artistName.classList.add('fadeOut1');
    if (i==1){
    setTimeout(function(){
    songName.classList.remove('fadeOut1');
    artistName.classList.remove('fadeOut1');
    songName.classList.add('fadeIn');
    artistName.classList.add('fadeIn');
    setTimeout(function() {
        songName.classList.remove('fadeIn');
        artistName.classList.remove('fadeIn');
      }, 500);},500);}

}