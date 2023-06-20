function rotateClockHands() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const hourRotation = (hours % 12) * 30 + minutes * 0.5;
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  // Update the clock every second
  setInterval(rotateClockHands, 1000);