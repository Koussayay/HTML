let i = 0;
defyLabels=document.querySelector(".defyLabels");
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
    },
    on: {
        slideChange: function() {
            var nav = document.querySelector('.nav');
            if (swiper.activeIndex != 0) {
                i = 1;
                nav.classList.remove("slideDown");
                nav.classList.add("slideUp");
            } else {
                i = 0;
                nav.classList.remove("slideUp");
                nav.classList.add("slideDown");
            }
        },
    }
});

document.addEventListener("DOMContentLoaded",function(){
    defyLabels.addEventListener("mouseover",function(){
        this.style.color="#FFB547";
    });
    defyLabels.addEventListener("mouseout",function(){
        this.style.color="#ffffff";
    });
});