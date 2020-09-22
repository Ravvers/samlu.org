const version = `Version 1.2.2 <br><a class='link' href='changelog.htm'>Changelog</a>`;
const title = 'Random Number Generator';
const subtitle = 'With Sam "RNGesus" Lu';

function updateVersion() {
  document.getElementById('version').innerHTML = version;
}
updateVersion();

function displayFrame() {
  const titleText = document.getElementById('title');
  titleText.innerText = title;
  const subtitleText = document.getElementById('subtitle');
  subtitleText.innerText = subtitle;
  const nav = document.getElementById('nav');
  let navHTML = '';
  const currentPage = document.getElementById('currentPage').innerText;
  if (currentPage === 'Single Number Generator') {
    navHTML = `<h2 id='navTitle'>Generators</h2><ul>
<li id='currentPageDisplay' class='menuItem'><a class='link' href='index.htm'>Single Number</a></li>
<li class='menuItem'><a class='link' href='mng.htm'>Multi-Number</a></li>
</ul>`;
  } else if (currentPage === 'Multi-Number Generator') {
    navHTML = `<h2 id='navTitle'>Generators</h2><ul>
<li class='menuItem'><a class='link' href='index.htm'>Single Number</a></li>
<li id='currentPageDisplay' class='menuItem'><a class='link' href='mng.htm'>Multi-Number</a></li>
</ul>`;
  } else {
    navHTML = `<h2 id='navTitle'>Generators</h2><ul>
<li class='menuItem'><a class='link' href='index.htm'>Single Number</a></li>
<li class='menuItem'><a class='link' href='mng.htm'>Multi-Number</a></li>
</ul>`;
    document.getElementById(
      'version'
    ).innerHTML = `Version 1.2.1 <br><a id='currentPageDisplay' class='link' href='changelog.htm'>Changelog</a>`;
  }
  nav.innerHTML = navHTML;
}
displayFrame();

function displayError(message) {
  const randomNumText = document.getElementById('randomlyGenerated');
  randomNumText.innerHTML = `<span style="font-size:20px;"><b>Error: </b></span>${message}`;
}

function checkNumberIntegrity(min, max, quantity, multi) {
  if (isNaN(min)) {
    displayError(`Please enter a number for the "From" field`);
    return false;
  }
  if (isNaN(max)) {
    displayError(`Please enter a number for the "Until" field`);
    return false;
  }
  if (isNaN(quantity) && multi) {
    displayError(`Please enter a value for the "Quantity" field`);
    return false;
  }
  if (quantity === 0 && multi) {
    displayError(`"0" is not a valid value for the "Quantity" field`);
    return false;
  }
  if (!(min < max)) {
    displayError('The value of "From" must be less than the value of "Until"');
    return false;
  }
  return true;
}

function displaySingle(randomNumber) {
  const randomNumText = document.getElementById('randomlyGenerated');
  randomNumText.innerHTML = `Sam "RNGesus" Lu has blessed you with <span style="font-size:20px;"><b>${randomNumber}</b><span>`;
}

function random() {
  const min = parseInt(document.getElementById('start').value);
  const max = parseInt(document.getElementById('end').value);
  if (checkNumberIntegrity(min, max, 1, false)) {
    displaySingle(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}

function displayMulti(randomNumbers) {
  const randomNumText = document.getElementById('randomlyGenerated');
  randomNumText.innerHTML = `Sam "RNGesus" Lu has blessed you with <span style="font-size:20px;"><b>${randomNumbers.join(
    ', '
  )}</b><span>`;
}

function multiRandom() {
  const min = parseInt(document.getElementById('start').value);
  const max = parseInt(document.getElementById('end').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  if (checkNumberIntegrity(min, max, quantity, true)) {
    const isUnique = document.getElementById('unique').checked;
    const randomNumbers = [];

    if (isUnique) {
      if (max - min + 1 < quantity) {
        displayError(
          'Quantity of numbers generated must be smaller than the difference between the range of numbers generated'
        );
        return;
      }
      while (randomNumbers.length !== quantity) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber);
        }
      }
    } else {
      for (let i = 0; i < quantity; i++) {
        randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }

    displayMulti(randomNumbers);
  }
}
