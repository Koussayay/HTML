const changingValueElement = document.querySelector('.changing-value');
windowIndex = "Login";
const texts = [
  "EXPERTISE",
  "ADAPTABILITY",
  "FLEXIBILITY",
  "ACCOMPANIMENT",
  "PROFESSIONALISM",
  "DYNAMISM"
];

let currentIndex = 0;   

function changeText() {
  changingValueElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}
setInterval(changeText, 2000);

function Showwe(){
    const popup = document.getElementById('we');
    we.classlist.add('show');
}
Showwe();



