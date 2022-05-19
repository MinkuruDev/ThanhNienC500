"use strict";
let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slideshow .slide");
let bars = document.querySelectorAll(".bars .bar");
let dots = document.querySelectorAll(".nav-dots .dot i");
let slideTitles = document.querySelectorAll(".slide-title");
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
let easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";
let staggeredSlideIn = (element, delay) => {
    return element.animate([
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", transformOrigin: "top" }
    ], {
        duration: 350,
        easing: easeInOutQuart,
        fill: "forwards",
        delay: 35 * delay
    });
};
let staggeredSlideOut = (element, delay) => {
    return element.animate([
        { transform: "scaleY(1)", transformOrigin: "top" },
        { transformOrigin: "bottom", offset: 0.001 },
        { transform: "scaleY(0)", transformOrigin: "bottom" }
    ], {
        duration: 350,
        easing: easeInOutQuart,
        fill: "forwards",
        delay: 35 * delay
    });
};
let fadeIn = (element) => {
    return element.animate([
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
    ], {
        duration: 800,
        easing: easeOutCubic,
        fill: "forwards",
        delay: 350
    });
};
let fadeOut = (element) => {
    return element.animate([
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-100%)" }
    ], {
        duration: 600,
        easing: easeOutCubic,
        fill: "forwards"
    });
};
let pageTransition = (activeIndex) => {
    slideTitles.forEach(slideTitle => fadeOut(slideTitle));
    Promise.all(Array.from(bars).map((bar, i) => staggeredSlideIn(bar, i).finished)).then(() => {
        setActiveIndex(activeIndex);
        bars.forEach((bar, i) => {
            staggeredSlideOut(bar, i);
        });
        slideTitles.forEach(slideTitle => fadeIn(slideTitle));
    });
};
let setActiveIndex = (activeIndex) => {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[activeIndex].classList.add("active");
    slideshow.style.setProperty("--active-index", `${activeIndex}`);
    slides.forEach(slide => (slide.style.zIndex = `-1`));
    slides[activeIndex].style.zIndex = `0`;
};
// dots
dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
    dot.addEventListener("click", () => {
        let currentActiveIndex = slideshow.style.getPropertyValue("--active-index");
        if (Number(currentActiveIndex) !== activeIndex) {
            pageTransition(activeIndex);
        }
    });
});

// var indexValue = 0;
// function slideShow() {
    
//     setTimeout(slideShow,5000)
//     var x;
  
//     for (x = 0; x < slides.length; x++) {
//         slides[x].style.display = "none";
//     }
//     pageTransition(indexValue)
//     indexValue++;
//     if (indexValue > slides.length) { indexValue = 1 }
    
//     slides[indexValue - 1].style.display = "block";
    
    
//     dots[0].classList.add("active");
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[indexValue - 1].classList.add("active");
// }
// slideShow();







// const coursesSlide =document.querySelector('.container__intro-slider')
// const coursesImage = document.querySelectorAll('.container__intro-slider img')
// const counter = 0;

// const size = coursesImage[0].clientWidth;

// function Slide(){
//     for(let i = 0; i < coursesSlide.length ; i++) {

//         coursesImage[i].style.transform = "translateX("+(-size*counter)+"px)";

//     }
//     counter++;
//     if(counter>coursesSlide.length) {
//         counter = 0;
//     }
//     coursesImage[counter].style.transform = "translateX("+(-size*counter)+"px)";
//     setTimeout(Slide, 1000);

// }

var slideIndex =  0
var slideIndexFirst =0
var slideImagesFirst = document.querySelectorAll('.js-slide-img--first')
console.log(slideImagesFirst)
function slideShow(slideImages, slideIndex) {
    for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.remove('js-slide--active')
        slideImages[i].classList.remove('js-slide--next')
    }
    console.log(slideIndex)

    slideImages[slideIndex].classList.add('js-slide--active')
    if (slideIndex == 2) {
        slideIndex = -1
        console.log(slideIndex)
    }
    slideImages[slideIndex + 1].classList.add('js-slide--next')
    slideIndex += 1
    console.log(slideIndex)

    setTimeout(slideShow, 5000, slideImages, slideIndex)
}
slideShow(slideImagesFirst, slideIndexFirst)

var slideIndex =  0
var slideIndexSecond =0
var slideImagesSecond = document.querySelectorAll('.js-slide-img--second')
console.log(slideImagesSecond)
function slideShow(slideImages, slideIndex) {
    for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.remove('js-slide--active')
        slideImages[i].classList.remove('js-slide--next')
    }
    console.log(slideIndex)

    slideImages[slideIndex].classList.add('js-slide--active')
    if (slideIndex == 2) {
        slideIndex = -1
        console.log(slideIndex)
    }
    slideImages[slideIndex + 1].classList.add('js-slide--next')
    slideIndex += 1
    console.log(slideIndex)

    setTimeout(slideShow, 5000, slideImages, slideIndex)
}
slideShow(slideImagesSecond, slideIndexSecond)


// var slideIndex = 0
// var slideIndexFirst = 0
// var slideImages =document.querySelectorAll('.js-slide-img--first')

// function slideShow(slideIndex){

//     for (var i = 0; i < slideImages.length; i++) {
//                 slideImages[i].classList.remove('animation')
//             }
//     // slideImages[slideIndex].classList.add('js-slide--active')
//     if (slideIndex > slideImages.length) {
//         slideIndex = 0
//     }
//     slideImages[slideIndex+1].classList.add('animation')
//     slideIndex += 1
//     setTimeout(slideShow, 5000,slideIndex)
// }
// slideShow(slideIndex)