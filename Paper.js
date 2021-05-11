class Paper{
  constructor(x,y,radius){
    var options={
      'isStatic':false,
      'restitution':0.5,
      'friction':0.2,
      'density':1.2,
    }
    this.body=Bodies.circle(x,y,width,options);
    this.width=width;
    this.Image=loadImage("paper.png");
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.position
    ellipseMode(CENTER);
    fill("yellow");
    Rotate(angle)
    Image(pos.x,pos.y,this.width);
  }
}