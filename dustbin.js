class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=50;
        this.height=140;
        this.image=loadImage("dustbin.png");
       
       
    }
    display(){
        imageMode("CENTER");
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}