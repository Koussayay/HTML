let nextAlbumButton = document.querySelector(".slideNextAlbum");
let prevAlbumButton = document.querySelector(".slidePrevAlbum");
let albumList = document.querySelector(".latestDropsSlider");
let  albums = document.querySelectorAll(".Slider img");
let albumButtons = document.querySelectorAll(".Slider button");
let album1 = document.getElementById("album1");
let currentAlbum = 1 ;
let viewMoreSongs = document.querySelector(".viewMoreSongs");
let VideoList =["https://www.youtube.com/watch?v=n2BnbpjpRdo&list=PLDr-FOmzEgAgbeig370AmhYySj1UtBKjx",
"https://www.youtube.com/watch?v=zZPHnVsGi7s",
"https://www.youtube.com/watch?v=l3mmsFeoMVE",
"https://www.youtube.com/watch?v=N9bKBAA22Go",
"https://www.youtube.com/watch?v=ZLX-GY0dJgc",
"https://www.youtube.com/watch?v=B9synWjqBn8",];
viewMoreSongs.addEventListener("click",function(){
    window.location.href="artists2.html";
});

const albumWidht = albums[0].clientWidth*1.2   ;
const initialScrollLeft = albumList.scrollLeft;
albumList.addEventListener('scroll', function(event) {
    console.log(album1.scrollLeft);
    if (albumList.scrollLeft==initialScrollLeft){
        prevAlbumButton.style.display ="none";
    }
    else{
        prevAlbumButton.style.display ="block";
    }
    const isScrollAtEnd = albumList.scrollLeft + albumList.clientWidth >= albumList.scrollWidth;
    if (isScrollAtEnd) {
        nextAlbumButton.style.display ="none";
    }
    else{
        nextAlbumButton.style.display ="block";
    }
});

if (currentAlbum==1){
    prevAlbumButton.style.display ="none";
}

prevAlbumButton.addEventListener('click', () => {
    if (currentAlbum==1){
        prevAlbumButton.style.display="none";
        return;
    }
    else {
    albumList.scrollBy({left:-albumWidht, behavior: "smooth" });
    currentAlbum--;
    if (currentAlbum==1){
        prevAlbumButton.style.display ="none";
    }
    if (currentAlbum!=albums.length){
        nextAlbumButton.style.display ="block";
    }
}
})
nextAlbumButton.addEventListener('click', () => {
    if (currentAlbum==albums.length/2-3){
        return;
    }
    else {
    albumList.scrollBy({left:albumWidht, behavior: "smooth" });
    currentAlbum++;
    if (currentAlbum==albums.length/2-3){
        nextAlbumButton.style.display ="none"
    }
    if(currentAlbum!=1){
        prevAlbumButton.style.display="block";
    }
    }
})
albums.forEach(function(a){
    a.addEventListener("mouseover",()=>{
        a.style.cursor="pointer";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < albums.length; i++) {
        albumButtons[i].addEventListener("click", () => {
            console.log("ddd");
            window.open(VideoList[i]);
        });
    }
});

albumButtons.forEach(function(b){
    b.addEventListener("mouseover",()=>{
        b.querySelector("img").src="orangePlayButton.png";
    })
    b.addEventListener("mouseout",()=>{
        b.querySelector("img").src="albumPlayButton.png";
    })
})