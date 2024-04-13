let discount = document.querySelector(".discount");
let musicClip =  document.querySelector(".musicClip");
let loopingArtistName = document.querySelectorAll(".loopingArtistName");
let loopingSongName = document.querySelectorAll(".loopingSongName");
const backgroundClip = new Image();
backgroundClip.src = 'clipCap.png';
document.addEventListener("DOMContentLoaded",function(){

    discount.addEventListener("click",()=>{
        window.location.href="Packs.html";

}
);
});

discount.addEventListener("mouseover",()=>{

    discount.style.cursor="pointer";
});

discount.addEventListener("mouseout",()=>{

    discount.style.cursor="auto";
});
window.addEventListener('scroll', function() {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
});


document.addEventListener("DOMContentLoaded",function(){

    musicClip.addEventListener("click",()=>{
        window.open('https://www.youtube.com/watch?v=Dj9qJsJTsjQ', '_blank');

}
);
});

musicClip.addEventListener("mouseover",()=>{

    musicClip.style.cursor="pointer";
    musicClip.style.backgroundImage = "url('clipCap.png')";
    musicClip.style.backgroundSize="cover";
    musicClip.style.backgroundPosition="center";
    musicClip.style.filter="grayscale(100%)";
    loopingArtistName.forEach(e=>{
        e.style.color="#ffffff";
    })
    loopingSongName.forEach(s=>{
        s.style.color="#ffffff";
    })

});

musicClip.addEventListener("mouseout",()=>{

    musicClip.style.cursor="auto";
    musicClip.style.backgroundImage = 'none';
    musicClip.style.filter="none";
    loopingArtistName.forEach(e=>{
        e.style.color="#000000";
    })
    loopingSongName.forEach(s=>{
        s.style.color="#000000";
    })
});
window.addEventListener('scroll', function() {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
});


