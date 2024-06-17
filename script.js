class RoundedRect {
    constructor(x, y, w, h, r) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.r = r;
    }
  
    display() {
      rect(this.x, this.y, this.w, this.h, this.r);
    }
  }
  
  function drawSpiral(x, y, w, h, r, angle, levels) {
    if (levels === 0) {
      return;
    }
    
    push(); // Save the current state of transformation
    translate(x, y); // Move to the new origin
    rotate(angle); // Rotate by the given angle
    
    let rect = new RoundedRect(0, 0, w, h, r);
    rect.display();
    
    pop(); // Restore the previous state of transformation
    
    // Calculate new parameters for the next level
    let newW = w * 0.9; // Scale down width
    let newH = h * 0.9; // Scale down height
    let newR = r * 0.9; // Scale down corner radius
    let newAngle = angle + PI / 4; // Increase angle
    let newX = x + w * 0.2; // Move right for the next rectangle
    let newY = y + h * 0.2; // Move down for the next rectangle
    
    drawSpiral(newX, newY, newW, newH, newR, newAngle, levels - 1);
  }
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let levels = 10; // Number of fractal levels
    let cornerRadius = 20; // Initial corner radius
    drawSpiral(200, 200, 80, 20, cornerRadius, PI / 4, levels);
  }
  