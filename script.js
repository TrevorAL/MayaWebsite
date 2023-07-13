function countdown() {
    const targetDate = new Date("August 18, 2023").getTime();
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
  

const countdownDate = new Date("2023-08-18").getTime();
const startDate = new Date("2023-05-17").getTime();
const endDate = new Date("2023-08-18").getTime();
const totalDuration = endDate - startDate;

function updateProgressBar() {
  const currentDate = new Date().getTime();
  const progress = Math.min((currentDate - startDate) / totalDuration, 1);
  const progressBar = document.getElementById("progressbar");
  progressBar.style.width = `${progress * 100}%`;
}
setInterval(updateProgressBar,  1000);

setInterval(countdown,  1000);
  
