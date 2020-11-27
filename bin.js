class Bin {
    constructor(x, y, height, width) {
      var options = {
        isStatic: true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");

      World.add(world,this.body);
    }
    display() {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  }