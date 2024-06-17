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
  
  function drawFractalRoundedRects(x, y, w, h, r, levels) {
    if (levels === 0) {
      return;
    }
    
    let rect = new RoundedRect(x, y, w, h, r);
    rect.display();
    
    drawFractalRoundedRects(x + w / 2, y - h / 2, w / 2, h / 2, r / 2, levels - 1);
  }
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let levels = 5; // Number of fractal levels
    let cornerRadius = 20; // Initial corner radius
    drawFractalRoundedRects(50, height - 50, 80, 20, cornerRadius, levels);
  }
  