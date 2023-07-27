let distanceToTop = 500;
let distanceToSide = 250;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
}

function draw() {
  background('blue');
  fill('green');
  ellipse(distanceToSide, distanceToTop, 20, 30);
}

function moveBalloon() {
  distanceToTop -= 1;

  if (distanceToTop < 0) {
    distanceToTop = 500;
  }
}

setInterval(moveBalloon, 10);

function mouseClicked() {
  if (mouseX > distanceToSide - 10 && mouseX < distanceToSide + 10) {
    if (mouseY > distanceToTop - 15 && mouseY < distanceToTop + 15) {
      distanceToSide = random(0, 250);
      distanceToTop = 500;
    }
  }
}
