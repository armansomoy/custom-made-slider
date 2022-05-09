let slides = document.querySelectorAll(".slide");
let slideArrays = Array.from(slides);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
console.log(prev);
console.log(next);

function prevNext() {
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slideArrays.indexOf(activeSlide);



  let prev;
  let next;
  if (currentIndex == 0) {
    prev = slideArrays[slideArrays.length - 1];
  } else {
    prev = slideArrays[currentIndex - 1];
  }

  if (currentIndex == slideArrays.length - 1) {
    next = slideArrays[0];
  } else {
    next = slideArrays[currentIndex + 1];
  }

  //   console.log("Next slide", next);
  //   console.log("Previous slide", prev);

  return [next, prev];
}
prevNext();

function koijabo() {
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slideArrays.indexOf(activeSlide);

  let [next, prev] = prevNext();

  slideArrays.map((slide, index) => {
    if (currentIndex == index) {
      slide.style.transform = "translateX(0)";
    } else if (slide == prev) {
      slide.style.transform = "translateX(-100%)";
    } else if (slide == next) {
      slide.style.transform = "translateX(100%)";
    }

    slide.addEventListener("transitionend", function(){
        slide.classList.remove("smooth");
    })
  });
}


next.addEventListener("click", function(){
    let activeSlide = document.querySelector(".slide.active");
    let [next, prev] = prevNext();

    activeSlide.classList.remove("active");
    activeSlide.style.transform = "translateX(-100%)"

    
    activeSlide.classList.add("smooth");
    next.classList.add("smooth");

    next.classList.add("active");
    next.style.transform = "translateX(0)";

    koijabo();
})