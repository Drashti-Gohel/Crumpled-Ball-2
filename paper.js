class Paper{
    constructor(x,y,radius){
        var options = {
            restitutions:0.3,
            friction:0.1,
            density:1.2,
            isStatic:false
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
        this.radius=60;
        

    }
    display(){
    
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius,60);
        
    }
}