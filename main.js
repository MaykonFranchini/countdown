
const arrivalDate = new Date('November 10, 2021 16:35:00');

const countdown = setInterval(()=> {
  const actualDate = new Date();

  const timeDiference = arrivalDate - actualDate;

  if (timeDiference <= 0) {
    clearInterval(countdown);
    document.getElementById("finish").innerText = "My love is at home! 🎉🎉🎉";
  }

  const days = Math.floor(timeDiference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiference % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = `${days}`;
  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('minutes').innerHTML = `${minutes}`;
  document.getElementById('seconds').innerHTML = `${seconds}`;
}, 1000)