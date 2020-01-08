function display(randomNumber) {
  const randomNumText = document.getElementById('randomlyGenerated');
  randomNumText.innerHTML = `Sam "RNG-sus" Lu has blessed you with <span style="font-size:20px;"><b>${randomNumber}</b><span>`;
}

function random() {
  // const min = document.getElementById('start').value;
  const max = document.getElementById('end').value;
  display(Math.floor(Math.floor(Math.random() * Math.floor(max) + 1)));
}
