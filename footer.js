let backToTop = document.querySelector(".backUpLink");
let socials = document.querySelectorAll(".bottomLinksRight img");
let socialLinks = ["https://www.facebook.com/koussay.ayari.3","https://www.instagram.com/koussay.ay/","https://www.linkedin.com/in/koussay-ay-7b9a00282"];
let socilaLinkCounter=0;
let footerLinks = document.querySelectorAll(".footerLinks a");
let sendMeBackUp = document.querySelector(".sendMeBackUp");

document.addEventListener("DOMContentLoaded",function(){
    backToTop.addEventListener("click",function(){
        window.scrollTo({top:0,behavior:"smooth"});
    });
});
backToTop.addEventListener("mouseover",function(){
    backToTop.style.cursor="pointer";
})

document.addEventListener("DOMContentLoaded",function(){
        socials[0].addEventListener("click",function(){
            window.open(socialLinks[0],"_blank");
        });
        socials[0].addEventListener("mouseover",function(){
            socials[0].style.cursor="pointer";
            socials[0].src="facebookOrange.png";
        })
        socials[0].addEventListener("mouseout",function(){
            socials[0].src="facebook.png";  
        })
        socials[1].addEventListener("click",function(){
            window.open(socialLinks[1],"_blank");
                });
        socials[1].addEventListener("mouseover",function(){
            socials[1].style.cursor="pointer";
            socials[1].src="instagramOrange.png";
        })
        socials[1].addEventListener("mouseout",function(){
            socials[1].src="instagram.png";  
        })
        socials[2].addEventListener("click",function(){
            window.open(socialLinks[2],"_blank"); 
               });
        socials[2].addEventListener("mouseover",function(){
            socials[2].style.cursor="pointer";  
            socials[2].src="linkedinOrange.png";
        })
        socials[2].addEventListener("mouseout",function(){
            socials[2].src="linkedin.png";  
        })

});

document.addEventListener("DOMContentLoaded",function(){
    footerLinks.forEach((e)=>{
        e.addEventListener("mouseover",function(){
            e.style.color="#FFB547";
        });
        e.addEventListener("mouseout",function(){
            e.style.color="#ffffff";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    sendMeBackUp.addEventListener("mouseover", function() {
        sendMeBackUp.style.color = "#FFB547"; 
    });
    sendMeBackUp.addEventListener("mouseout", function() {
        sendMeBackUp.style.color = "#ffffff";
    });
});