const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slide-left");
const nextBtn = document.querySelector(".slide-right");

let current = 0;

function showSlide(index){

    slides[current].classList.remove("active");

    current = index;

    if(current >= slides.length){
        current = 0;
    }

    if(current < 0){
        current = slides.length - 1;
    }

    slides[current].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    showSlide(current + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(current - 1);
});
showSlide(0);

const container = document.querySelector(".container");
setInterval(() => {
container.scrollLeft += 1;
}, 20);
   