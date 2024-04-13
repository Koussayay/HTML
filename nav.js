let nav = document.querySelector(".nav");
var new_scroll_position = 0;
var last_scroll_position;
let signInNav = document.querySelector(".signIn");
let LoginNavLink = document.getElementById("LoginNavLink");
var loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false; ;
var windowIndex = JSON.parse(localStorage.getItem("windowIndex")) || ""; ;
let links = document.querySelectorAll(".navLink");
let logo = document.querySelector(".logo");
document.addEventListener("DOMContentLoaded",function(){
  logo.addEventListener("click",function(){
    window.location.href="projet_final.html";
  });
  logo.addEventListener("mouseover",function(){
    logo.style.cursor="pointer";
  });
});
document.addEventListener("DOMContentLoaded",function(){
  links.forEach(function(l){
    l.addEventListener("click",function(){
      windowIndex = ""; 
    });
  });
});
window.onscroll = function() {
    if(window.scrollY>200 ){
      window.addEventListener('scroll', function() {
        last_scroll_position = window.scrollY;
        if (new_scroll_position < last_scroll_position && last_scroll_position > 0) {
          nav.classList.remove("slideDown");
          nav.classList.add("slideUp");
          setTimeout(() => {
            nav.classList.add("sticky");
          }, 500);
         
        } else if (new_scroll_position > last_scroll_position) {
          nav.classList.remove("slideUp");
          nav.classList.add("slideDown");
        }
        new_scroll_position = last_scroll_position;
      });
    }
    else {
      nav.classList.remove("sticky");
    }
}
 if (loggedIn==true){
    signInNav.textContent="Sign out ";
 }
 else{
  signInNav.textContent="Log in";
 }
 signInNav.addEventListener("click",function(){
  if (loggedIn==true){
    loggedIn=false;
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    signInNav.textContent="Log in";
    userContainer.style.display="flex";
    foundAccount =false
 }
 else {
    window.location.href ="Login.html" ;
    windowIndex="LogIn";
    localStorage.setItem("windowIndex", JSON.stringify(windowIndex));
 }
 });