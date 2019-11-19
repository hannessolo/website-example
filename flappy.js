let yPosition
const xSpeed = 2
const gapSize = 100
const pillarWidth = 30
const birdPos = 80
const birdSize = 20
const floorHeight = 30
let ySpeed = 0
let yAcceleration = 0.2
let gameOver = false
let points = 0
let highScore

let pillars = [250, 500]
let gaps = [0, 0]

function setup() {
  createCanvas(500, 500)
  yPosition = height / 2
  gaps = [height / 2, height / 2]
  highScore = 0
}

function draw() {
  background("lightblue")

  // check for game over
  if (gameOver) {
    text(`Game over, Score ${points}, high score ${highScore}`, 50, 50)
    return
  }

  // calculate position of bird
  ySpeed += yAcceleration
  yPosition += ySpeed

  // draw bird
  ellipse(birdPos, yPosition, birdSize, birdSize)

  for (let i = 0; i < pillars.length; i++) {
    // calulate position of pillar
    pillars[i] -= xSpeed
    if (pillars[i] < -pillarWidth) {
      // reset pillar
      pillars[i] = width
      gaps[i] = Math.random() * (height - gapSize - floorHeight)
    }

    // Add point if the pillar is at the bird's position
    if (pillars[i] == birdPos - pillarWidth) {
      points += 1
    }

    // draw pillar
    fill("green")
    rect(pillars[i], 0, pillarWidth, gaps[i])
    rect(pillars[i], gaps[i] + gapSize, pillarWidth, height - gaps[i] - gapSize)
    fill("black")
  }

  // draw floor
  fill("green")
  rect(0, height - floorHeight, width, floorHeight)
  fill("black")

  // Check loss conditions
  if (checkHasHitGround() || checkHasHitPillar()) {
    highScore = points > highScore ? points : highScore
    gameOver = true
  }

  // draw points
  text(points, 30, 30)

}

function mousePressed() {
  if (gameOver) {
    reset()
  }
  ySpeed = -5
}

function checkHasHitGround() {
  return yPosition > height - floorHeight - birdSize / 2
}

function checkHasHitPillar() {
  for (let i = 0; i < pillars.length; i++) {
    if (birdPos + (birdSize / 2) > pillars[i] && birdPos - (birdSize / 2) < pillars[i] + pillarWidth) {
      if (yPosition - (birdSize / 2) < gaps[i] || yPosition + (birdSize / 2) > gaps[i] + gapSize) {
        return true
      }
    }
  }
  return false
}

function reset() {
  gameOver = false
  yPosition = height / 2
  ySpeed = 0
  gaps = [height / 2, height / 2]
  pillars = [250, 500]
  points = 0
}
