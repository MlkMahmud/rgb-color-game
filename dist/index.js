//Define Variables
let pickedColorDisplay = document.getElementById('pickedColorDisplay');
let h1Display = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let message = document.getElementById('message');
let easyButton = document.getElementById('easy');
let hardButton = document.getElementById('hard');
let square = document.querySelectorAll('.square');
let colors = colorGenerator(6);
let winningColor = pickColor();
let difficulty = false;


//Define Functions
function colorGenerator(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        let red = Math.floor(Math.random() * 256);
        let green =  Math.floor(Math.random() * 256);
        let blue =  Math.floor(Math.random() * 256);
        let mix = `rgb(${red}, ${green}, ${blue})`;
        arr.push(mix);
    }
    return arr;
}


function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    let color = colors[random];
    return color;
}

//On Load
    for(let i= 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        winningColor = pickColor();
        pickedColorDisplay.textContent = winningColor;
        square[i].addEventListener('click', function(){
            if(square[i].style.backgroundColor === winningColor){
                message.textContent = "Correct!";
                resetButton.textContent = "Try Again?"
                h1Display.style.backgroundColor = winningColor;
                for(let i = 0; i < square.length; i++){
                    square[i].style.backgroundColor = winningColor;
                }
            }
            else{
                message.textContent = "Try Again";
                square[i].style.backgroundColor = "#232323";
            }
        })
        

    }
//Easy Mode
easyButton.addEventListener('click', function(){
    colors = colorGenerator(3);
    winningColor = pickColor()
    pickedColorDisplay.textContent = winningColor;
    easyButton.classList.add('active');
    hardButton.classList.remove('active');
    h1Display.style.backgroundColor = "#1A61E5";
    message.textContent = "";
    resetButton.textContent = "New Colors";
    difficulty = true;
    for(let i= 0; i < colors.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    for(let i = 3; i < square.length; i++){
        square[i].style.display = "none";
        
    }
})

//Hard Mode
hardButton.addEventListener('click', function(){
    colors = colorGenerator(6);
    winningColor = pickColor();
    pickedColorDisplay.textContent = winningColor;
    hardButton.classList.add('active');
    easyButton.classList.remove('active');
    h1Display.style.backgroundColor = "#1A61E5";
    message.textContent = "";
    resetButton.textContent = "New Colors"
    difficulty = false;
    for(let i= 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
        
    }
})

//Reset Button
resetButton.addEventListener('click', function(){
    resetButton.textContent = "New Colors";
    h1Display.style.backgroundColor = "#1A61E5";
    message.textContent = "";
    if(difficulty === false){
        colors = colorGenerator(6);
        winningColor = pickColor();
        pickedColorDisplay.textContent = winningColor;
        for(let i = 0; i < colors.length; i++){
            square[i].style.backgroundColor = colors[i];
        }
    }
    else if(difficulty === true){
        colors = colorGenerator(3);
        winningColor = pickColor();
        pickedColorDisplay.textContent = winningColor;
        for(let i = 0; i < colors.length; i++){
            square[i].style.backgroundColor = colors[i];
        }
    }

})
