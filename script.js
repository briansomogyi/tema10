class Stair {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    display() {
      rect(this.x, this.y, this.width, this.height);
    }
  }
  
  function drawFractalStairs(x, y, width, height, levels) {
    if (levels === 0) {
      return;
    }
    
    let stair = new Stair(x, y, width, height);
    stair.display();
    
    drawFractalStairs(x + width / 2, y - height / 2, width / 2, height / 2, levels - 1);
  }
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let levels = 5; // You can change the number of levels here
    drawFractalStairs(50, height - 50, 80, 20, levels);
  }
  