let lastX = null
let lastY = null
let drawColor = 'black'
let strokeWidth = 1

function setup() {
  cursor(CROSS);
  createCanvas(400, 400);
  background('white')
  let red = createButton('red')
  let green = createButton('green')
  let blue = createButton('blue')
  let erase = createButton('erase')
  let slider = createSlider(1, 20, 1, 1)
  red.style('color', 'red')
  green.style('color', 'green')
  blue.style('color', 'blue')
  erase.mousePressed(() => {drawColor = 'white'})
  red.mousePressed(() => {drawColor = 'red'})
  green.mousePressed(() => {drawColor = 'green'})
  blue.mousePressed(() => {drawColor = 'blue'})
  slider.input(() => {strokeWidth = slider.value()})
}

function draw() {

}

function mouseDragged() {
  strokeWeight(strokeWidth)
  stroke(drawColor)
  if (lastX != null) {
    line(lastX, lastY, mouseX, mouseY)
  }
  lastX = mouseX
  lastY = mouseY
}

function mouseReleased() {
  lastX = null
  lastY = null
}
