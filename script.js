class RoundedRect {
  constructor(x, y, w, h, r, level) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.level = level;
  }

  display() {
    push(); // Save the current state of transformation
    translate(this.x, this.y); // Move to the new origin
    rotate(PI / (4 + this.level)); // Rotate by a level-dependent angle
    fill(255 - this.level * 20, this.level * 10, this.level * 15); // Set fill color based on level
    rect(0, 0, this.w, this.h, this.r); // Draw the rectangle with rounded corners
    pop(); // Restore the previous state of transformation
  }
}

function drawSpiralFractal(x, y, w, h, r, levels) {
  if (levels === 0) {
    return;
  }
  
  let rect = new RoundedRect(x, y, w, h, r, levels);
  rect.display();
  
  // Calculate new parameters for the next level
  let newW = w * (0.8 - levels * 0.01); // Scale down width more for higher levels
  let newH = h * (0.8 - levels * 0.01); // Scale down height more for higher levels
  let newR = r * (0.8 - levels * 0.01); // Scale down corner radius more for higher levels
  let newX = x + (w - newW) * cos(PI / (4 + levels)) - h * sin(PI / (4 + levels));
  let newY = y + (w - newW) * sin(PI / (4 + levels)) + h * cos(PI / (4 + levels));
  
  drawSpiralFractal(newX, newY, newW, newH, newR, levels - 1);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let levels = 15; // Increased number of fractal levels for more detail
  let cornerRadius = 20; // Initial corner radius
  drawSpiralFractal(200, 200, 80, 20, cornerRadius, levels);
}
