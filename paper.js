class Particale{
    constructor(x,y,radius){
        var option = {
            
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0,255));
        

        World.add(world,this.body);

    }
 display(){
     var position = this.body.position;
     


     
     ellipseMode(CENTER);
     fill(this.color);
     strokeWeight(1);
     ellipse(position.x,position.y,this.radius);
     
 }
}
