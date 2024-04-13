let counter = document.querySelectorAll(".number");
const animationDuration = 2000;
let currentCount1 = 0;
let currentCount2 = 0;
let currentCount3 = 0;
const updateCounter1 = () => {
    if (currentCount1 <= 1000) {
        counter[0].textContent = "+"+currentCount1;
        currentCount1+=10;
        setTimeout(updateCounter1, animationDuration/100);
    }
};
const updateCounter2 = () => {
    if (currentCount2 <= 10000) {
        counter[1].textContent = "+"+currentCount2;
        currentCount2+=100;
        setTimeout(updateCounter2, animationDuration/100);
    }
};
const updateCounter3 = () => {
    if (currentCount3 <= 100) {
        counter[2].textContent = "+"+currentCount3;
        currentCount3++;
        setTimeout(updateCounter3, animationDuration/100);
    }
};


function handleVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateCounter1();
            updateCounter2();
            updateCounter3();
            
            observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver(handleVisibility);
const targetDiv = document.querySelector('.numbersStats');

