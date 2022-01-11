const rgbColor = document.querySelector('#rgbCode');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const colorBox = document.querySelector('.color-box');
const boxes = document.querySelectorAll('.box');
const playBtn = document.querySelector('playAgainBtn');
const questionsHud = document.querySelector('.questions-hud');
var boxValue = 6;
// const colors = generateRandomColor(6);
// const pickedColor = colors[Math.floor(Math.random()*6)];
// rgbColor.textContent = pickedColor;
const gameStatus = document.querySelector('.gameStatus');
gameStatus.textContent = "Let's Play !!!";

// easy button
easyBtn.addEventListener('click', () => {
    questionsHud.style.backgroundColor = "rgb(233, 119, 119)"; // reset background color of question hud
    gameStatus.textContent = "Let's Play !!!";

    // highlight easybtn
    easyBtn.style.background = "rgb(233, 119, 119)";
    easyBtn.style.color = "white";
    boxValue = 3; // 3 boxes

    // reset hardbtn;
    hardBtn.style.backgroundColor = "#F5E8E2";
    hardBtn.style.color = "black";

    // generating 3 random colors and picking 1
    colors = generateRandomColor(boxValue);
    pickedColor = colors[Math.floor(Math.random()*boxValue)];
    rgbColor.textContent = pickedColor;

    console.log(boxes.length);
    
    // assigning random colors to 3 boxes
    for(let i = 0; i < boxes.length; i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
        }else {
            boxes[i].style.display = 'none';
        }
    }
});

// hardbtn
hardBtn.addEventListener('click', () => {
    questionsHud.style.backgroundColor = "rgb(233, 119, 119)"; // reset background color of question hud
    gameStatus.textContent = "Let's Play !!!";

    // highlight hardBtn
    hardBtn.style.background = "rgb(233, 119, 119)";
    hardBtn.style.color = "white";
    boxValue = 6; // 6 boxes

    // reset easyBtn;
    easyBtn.style.backgroundColor = "#F5E8E2";
    easyBtn.style.color = "black";

    // generating 6 random colors and picking 1
    // colors = generateRandomColor(boxValue);
    // pickedColor = colors[Math.floor(Math.random()*boxValue)];
    // rgbColor.textContent = pickedColor;

    console.log(boxes.length);
    
    // assigning random colors to 6 boxes
    for(let i = 0; i < boxes.length; i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = 'block';
        }
    }
});