autoSlider();

let left = 0;

function autoSlider() {
  let timer;
  timer = setTimeout(sliderLeft, 3000);
}

function sliderLeft() {
  let polosa = document.getElementById("polosa");
  left = left - 128;
  if (left < -512) {
    left = 0;
  }
  polosa.style.left = left + "px";
  autoSlider();
  
}



  // 3 slider

//   autoTourSlider();

// let leftTour = 0;

// function autoTourSlider() {
//   let timerTour;
//   timerTour = setTimeout(sliderTourLeft, 5000);
// }

// function sliderTourLeft() {
//   let sliderTour = document.querySelector(".tour__slider");
// console.log(sliderTour)
//   leftTour = leftTour - 528;
//   if (leftTour < -1056) {
//     leftTour = 0;
//   }
//   sliderTour.style.left = leftTour + "px";
//   autoTourSlider();
  
// }
