let canv = document.getElementById('myCanvas');
let ctx = canv.getContext('2d');

let posX = 300;
let posY = 200;

let radius = 10; 

let speedX = Math.random() * 10 - 5;
let speedY = Math.random() * 10 - 5;

function Desenha()
{
    ctx.clearRect(0, 0, canv.clientWidth, canv.height)
    posX += speedX; // soma 1 ao valor de posX
    posY += speedY;
if (posX > canv.width - radius || posX < radius)
    speedX= -speedX;
if (posY > canv.height - radius || posY < radius)
    speedY = -speedY;

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(posX,posY, radius, 0, 2*Math.PI);
    ctx.stroke();
}

setInterval(Desenha, 20); //chama a função a cada 20 milisegundos