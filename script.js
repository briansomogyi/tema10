let angle;
let branchLength;

class Branch {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.finished = false;
  }

  show() {
    stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  branch(angleA, angleB) {
    let dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(angleA);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let right = new Branch(this.end, newEnd);

    dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(angleB);
    dir.mult(0.67);
    newEnd = p5.Vector.add(this.end, dir);
    let left = new Branch(this.end, newEnd);

    return [right, left];
  }
}

function setup() {
  createCanvas(400, 400);
  let start = createVector(width / 2, height);
  let end = createVector(width / 2, height - 100);
  let root = new Branch(start, end);

  angle = PI / 4;
  branchLength = 100;

  let tree = [];
  tree.push(root);

  let current = [];
  for (let i = 0; i < 6; i++) {
    for (let j = tree.length - 1; j >= 0; j--) {
      if (!tree[j].finished) {
        current.push(...tree[j].branch(angle, -angle));
        tree[j].finished = true;
      }
    }
    tree.push(...current);
    current = [];
  }
}

function draw() {
  background(51);
  
  for (let i = tree.length - 1; i >= 0; i--) {
    tree[i].show();
  }
}
