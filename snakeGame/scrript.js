let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i =1; i<101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1,
    y = 10;

for (let i = 0; i<excel.length; i++) {
    if (x>10) {
        x=1;
        y--; 
    }
    excel[i].setAttribute('posx', x);
    excel[i].setAttribute('posy', y);
    x++; 
}

function generateSnake() {
    let posx = Math.round(Math.random() * (10 -3) + 3);
    let posy = Math.round(Math.random() * (10 -1) + 1);
    return [posx, posy]; 
}

let coord = generateSnake();
let snakeBody = [document.querySelector('[posx = "' + coord[0] + '"][posy = "' + coord[1] + '"]'), 
document.querySelector('[posx = "' + (coord[0]-1) + '"][posy = "' + coord[1] + '"]'),
document.querySelector('[posx = "' + (coord[0]-2) + '"][posy = "' + coord[1] + '"]')];

for (let i =0; i<snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('head');

let mouse;

function createMouse() {
    function generateMouse() {
        let posx = Math.round(Math.random() * (10 -3) + 3);
        let posy = Math.round(Math.random() * (10 -1) + 1);
        return [posx, posy]; 
    }

    let mouseCoord = generateMouse();
    console.log(mouseCoord);
    mouse = document.querySelector('[posx = "' + mouseCoord[0] + '"][posy = "' + mouseCoord[1] + '"]');

    while(mouse.classList.contains('snakeBody') || mouse.classList.contains('head')) {
        let mouseCoord = generateMouse();
        console.log(mouseCoord);
        mouse = document.querySelector('[posx = "' + mouseCoord[0] + '"][posy = "' + mouseCoord[1] + '"]');
    }

    mouse.classList.add('mouse');
}

createMouse();

function move() {
   let snakeCoord = [snakeBody[0].getAttribute('posx'), snakeBody[0].getAttribute('posy')];
   snakeBody[0].classList.remove('head');
   snakeBody[snakeBody.length-1].classList.remove('snakeBody');
   snakeBody.pop();
   
   snakeBody.unshift(document.querySelector('[posx = "' + (snakeCoord[0]+1) + '"][posy = "' + snakeCoord[1] + '"]'));

   snakeBody[0].classList.add('head');
   for (let i =0; i<snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
    }
}

let interval = setInterval(move, 300);