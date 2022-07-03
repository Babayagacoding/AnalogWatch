const secondHand = document.querySelector('.Second');
const minsHand = document.querySelector('.Minute');
const hourHand = document.querySelector('.Hour');

 function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds / 60) * 360) + 90;
const secondsDegrees = 6 * seconds;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
const minsDegrees = 6 * mins;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    const hourDegrees = 30 * hour + mins / 2;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);

setDate();