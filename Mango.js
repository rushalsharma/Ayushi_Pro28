class Mango {
    constructor(x, y) {
    var options = {
        'restitution':0,
            'friction':1,
            'isStatic':true

    }
    this.body = Bodies.circle(x, y,20,options);
    this.r = 20;
   

    this.image=loadImage("mango.png")
      
      World.add(world, this.body);
    }

 display(){
    var pos =this.body.position;
    //var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    //fill("orange")
     //rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r);
    pop();
  
 } 
}