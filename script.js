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
  
  class FractalStairs {
    constructor(x, y, width, height, levels) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.levels = levels;
      this.stairs = [];
      this.createStairs();
    }
  
    createStairs() {
      let w = this.width;
      let h = this.height;
      for (let i = 0; i < this.levels; i++) {
        this.stairs.push(new Stair(this.x + i * w, this.y - i * h, w, h));
        w *= 0.5;
        h *= 0.5;
      }
    }
  
    display() {
      for (let stair of this.stairs) {
        stair.display();
      }
    }
  }
  
  let fractalStairs;
  
  function setup() {
    createCanvas(400, 400);
    fractalStairs = new FractalStairs(50, height - 50, 80, 20, 5);
  }
  
  function draw() {
    background(220);
    fractalStairs.display();
  }
  