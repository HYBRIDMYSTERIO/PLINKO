class Division {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;

        World.add(world,this.body);

    }
 displaydivision(){
     var position = this.body.position;
     rectMode(CENTER);
     fill(255);
     stroke(255);
     strokeWeight(4);
     rect(position.x,position.y,this.width,this.height);
 }
}
