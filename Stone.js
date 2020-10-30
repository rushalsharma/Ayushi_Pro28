class Stone  {
    constructor(ba, p1,p2) {
    var options = {
        bodyA:ba,
        pointB:{x:p1,y:p2},
        stiffness: 0.04,
        length: 10

    }
    this.stone = Matter.Constraint.create(options);
    World.add(world, this.stone);
    
    this.image=loadImage("stone.png")
      
     
    }

    display(){
      if(this.stone.bodyA){
      var pointA = this.stone.bodyA.position;
      var pointB = this.stone.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  }

 fly(){
  this.stone.bodyA=null
}
attach(body){
  this.stone.bodyA=body
}
};