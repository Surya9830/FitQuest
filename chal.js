// Step 1: store image paths
let images = ["fit1.jpg", "fit2.jpg", "fit3.jpg", "fit4.jpg"];

// Step 2: start from first image
let index = 0;

// Step 3: get the image tag
let slide = document.getElementById("slide");

// Step 4: change image every 3 seconds
function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0; // back to first image
  }
  slide.src = images[index];
}

// Step 5: set interval
setInterval(changeImage, 4000);




/////timer Logic


const challengeDate = new Date("Dec 24, 2025 00:00:00").getTime();
const x = setInterval(function(){
    const now = new Date().getTime();
  const distance = challengeDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " days " + hours + "hr " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Challenge Started!";
  }
}, 1000);

