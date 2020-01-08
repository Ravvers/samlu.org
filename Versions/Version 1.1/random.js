const version = 'Version 1.1';

function updateVersion() {
  document.getElementById('version').innerText = version;
}
updateVersion();

function display(randomNumber) {
  const randomNumText = document.getElementById('randomlyGenerated');
  randomNumText.innerHTML = `Sam "RNG-sus" Lu has blessed you with <span style="font-size:20px;"><b>${randomNumber}</b><span>`;
}

function random() {
  const min = parseInt(document.getElementById('start').value);
  const max = parseInt(document.getElementById('end').value);
  display(Math.floor(Math.random() * (max - min + 1)) + min);
}
