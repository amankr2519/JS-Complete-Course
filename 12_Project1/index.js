setInterval(() => {

  const element = document.querySelector(".clock");
  const sound = document.querySelector(".sound");
  
  // console.log(element)
  
  const time = new Date();
  
  element.textContent = time ;
  
  const option = {
    timeZone : 'Asia/Kolkata',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
  }
  
  element.textContent = time.toLocaleTimeString('eng-Us',option);
  sound.play();
    
}, 1000);