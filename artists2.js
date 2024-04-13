let loopingArtistsName = document.querySelectorAll(".loopingArtistsName");
let artistContainer = document.querySelectorAll(".artistContainer");
let defyLabels = document.querySelector(".defyLabels");
windowIndex = "";
document.addEventListener("DOMContentLoaded",function(){
    artistContainer.forEach((e)=>{
        e.addEventListener("mouseover",function(){
            e.style.cursor ="pointer";
            e.querySelector(".loopingArtistsName").style.opacity="1";
            e.style.borderRadius="1vw";
        });
        e.addEventListener("mouseout",function(){
            e.style.cursor ="pointer";
            e.querySelector(".loopingArtistsName").style.opacity="0";
            e.style.borderRadius="0vw";
        });
    });
});


const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
  };
  

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        var typedText = new Typed(".defyLabels", {
          strings: ["DEFYLABELS."],
          typeSpeed: 100,
          loop: false,
          backSpeed: 40,
          backDelay: 3000
        });

        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(defyLabels); 


