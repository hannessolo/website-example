let distanceToTop = 500;
let distanceToSide = 250;
let score = 0;

let balloon;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
  balloon = loadImage('./balloon.png');
}

function draw() {
  background('skyblue');
  fill('green');
  image(balloon, distanceToSide, distanceToTop, 40, 60);
  text('Score: ' + score, 20, 20);
}

function moveBalloon() {
  distanceToTop -= 2;

  if (distanceToTop < 0) {
    distanceToTop = 500;
    score -= 1;
  }
}

setInterval(moveBalloon, 10);

function mouseClicked() {
  if (mouseX > distanceToSide && mouseX < distanceToSide + 40) {
    if (mouseY > distanceToTop && mouseY < distanceToTop + 60) {
      distanceToSide = random(0, 250);
      distanceToTop = 500;
      score += 1;
    }
  }
}
