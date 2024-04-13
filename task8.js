let datef = new Date('2024-03-31T23:59:59').getTime();

let countdown = setInterval( ()=>{
let datem = new Date().getTime();
diff = datef - datem ;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);
let d = document.getElementById("days");
d.innerText=days;
let h = document.getElementById("hours");
h.innerText=hours;
let m = document.getElementById("minutes");
m.innerText=minutes;
let s = document.getElementById("seconds");
s.innerText=seconds;
if (diff < 0) {
    clearInterval(countdown);
    document.getElementById("date").style.display("hidden");
    document.getElementById("msg").style.display("block");
}
},1000);
