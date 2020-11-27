class Paper{

constructor(x,y,radius){

 var options = {
   "restitution": 0.3,
   "friction": 0.5,
   "density": 1.2,
 }   

 this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
 this.radius = radius;
 this.image = loadImage("sprites/paper.png");

 World.add(world,this.body);

}
display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
fill("white");
circle(0,0,this.radius);
imageMode(CENTER);
image(this.image,0,0,this.radius);
pop();
}

}

