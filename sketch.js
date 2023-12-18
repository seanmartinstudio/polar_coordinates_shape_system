const sketchHeight = 400;
const sketchWidth = 400;
const numShapesX = 5; // Adjust the number of shapes along the x-axis
const numShapesY = 5; // Adjust the number of shapes along the y-axis
const shapeDistanceX = 80; // Adjust the distance between shapes along the x-axis
const shapeDistanceY = 80; // Adjust the distance between shapes along the y-axis
const shapeSize = 40; // Adjust the size of the shapes
let off = 1;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);

  // Calculate the initial position to center the shapes
  const startX = (width - (numShapesX - 1) * shapeDistanceX) / 2;
  const startY = (height - (numShapesY - 1) * shapeDistanceY) / 2;

  // Outer loop for creating shapes along the x-axis
  for (let i = 0; i < numShapesX; i++) {
    const xPosition = startX + i * shapeDistanceX;

    // Inner loop for creating shapes along the y-axis
    for (let j = 0; j < numShapesY; j++) {
      const yPosition = startY + j * shapeDistanceY;

      // Drawing individual shape
      beginShape();
      for (let angle = 0; angle < 360; angle += 50) {
        off += 1;
        const radius = map(noise(off), 0, 1, 0, shapeSize);
        const x = radius * cos((PI / 180) * angle) + xPosition;
        const y = radius * sin((PI / 180) * angle) + yPosition;
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }

  noLoop();
}
