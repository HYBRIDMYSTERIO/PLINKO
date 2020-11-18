class Pin {
    constructor(x,y,radius){
        var option = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        

        World.add(world,this.body);

    }
 displaypin(){
     var position = this.body.position;
     ellipseMode(CENTER);
     fill("white");
     stroke("white");
     strokeWeight(4);
     ellipse(position.x,position.y,this.radius);
 }
}
