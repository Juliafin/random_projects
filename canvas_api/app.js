console.log('hello')

var canvas = document.getElementById('draw')
var context = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var x= Math.floor(Math.random() * 500)
var y = Math.floor(Math.random() * 500)

var dx = Math.floor(Math.random() * -.5) + 3
var dy = Math.floor(Math.random() * -.5) + 3
context.beginPath()

function randomColor() {
  var colors = ['red', 'green', 'yellow', 'blue', 'orange', 'black', 'purple', 'violet', 'black']
  var color = colors[Math.floor(Math.random() * colors.length)]
  return color
}

function randomDirection() {
  var directions = [1,-1]
  var direction = directions[Math.floor(Math.random() * directions.length)]
  return direction
}


function drawLine() {
  // var x = startingX + dx 
  // var y = startingY + dy
  // console.log(x, y)
  // context.moveTo(startingX, startingY)
  context.lineTo(x, y)
  // dx += dx
  // dy += dy
  var ran
  var dx = randomDirection()
  var dy = randomDirection()
  x+=dx
  y+=dy
  context.strokeStyle = randomColor()
  // context.stroke()
  context.stroke()
  
}

for (let i = 0; i < 100000; i++) {
  setTimeout(drawLine, 2000)
  console.log((i));
}

  
  


  setTimeout(() => {
    
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.stroke()
    
  }, 500)