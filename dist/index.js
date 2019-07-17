//Define Variables
let pickedColorDisplay = document.getElementById('pickedColorDisplay');
let h1Display = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let message = document.getElementById('message');
let easyButton = document.getElementById('easy');
let hardButton = document.getElementById('hard');
let square = document.querySelectorAll('.square');
let colors = colorGenerator(9);
let winningColor = pickColor();
let difficulty = false;

function colorGenerator(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let mix = `rgb(${red}, ${green}, ${blue})`;
    arr.push(mix);
  }
  return arr;
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  let color = colors[random];
  return color;
}

function loadGame() {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    pickedColorDisplay.textContent = winningColor;
    square[i].addEventListener('click', function () {
      if (square[i].style.backgroundColor === winningColor) {
        message.textContent = 'Correct!';
        resetButton.textContent = 'Try Again?';
        h1Display.style.backgroundColor = winningColor;
        for (let i = 0; i < square.length; i++) {
          square[i].style.backgroundColor = winningColor;
        }
      } else {
        message.textContent = 'Try Again';
        square[i].style.backgroundColor = '#232323';
      }
    });
  }
}

function resetGame() {
  resetButton.textContent = 'New Colors';
  h1Display.style.backgroundColor = '#1A61E5';
  message.textContent = '';
  if (difficulty === false) {
    hardButton.classList.add('active');
    easyButton.classList.remove('active');
    colors = colorGenerator(9);
    winningColor = pickColor();
    pickedColorDisplay.textContent = winningColor;
    for (let i = 0; i < colors.length; i++) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = 'block';
    }
  } else if (difficulty === true) {
    easyButton.classList.add('active');
    hardButton.classList.remove('active');
    colors = colorGenerator(6);
    winningColor = pickColor();
    pickedColorDisplay.textContent = winningColor;
    for (let i = 0; i < 9; i++) {
      if (i > 5) square[i].style.display = 'none';
      else square[i].style.backgroundColor = colors[i];
    }
  }
}

easyButton.addEventListener('click', () => {
  difficulty = true;
  resetGame();
});

hardButton.addEventListener('click', () => {
  difficulty = false;
  resetGame();
});

resetButton.addEventListener('click', resetGame);

loadGame();
