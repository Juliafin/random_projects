var canvas = document.getElementById('draw')
var context = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
context.lineWidth = 10;
context.strokeStyle = 'black'

function randomColor() {
  var colors = ['red', 'green', 'yellow', 'blue', 'orange', 'black', 'purple', 'violet', 'black']
  var color = colors[Math.floor(Math.random() * colors.length)]
  return color
}

setInterval(() => {
  context.strokeStyle = randomColor();

}, 1000)


let mouseClicked = false;

let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  // console.log(e);
  if (!mouseClicked) {
    mouseClicked = true;
    context.beginPath();
  }
  const {clientX: x, clientY: y} = e;
  console.log(x, y)
  // context.moveTo(x, y);
  context.lineTo(x, y)
});

canvas.addEventListener('mouseup', (e) => {
  mouseClicked = false;
  context.closePath();
  // context.stroke();
})

canvas.addEventListener('mousemove', (e) => {
  if (!mouseClicked) {
    return
  }
  const {clientX: x, clientY: y} = e;
  console.log(x, y)
  // context.moveTo(x, y);
  context.lineTo(x, y)
  context.stroke();
})