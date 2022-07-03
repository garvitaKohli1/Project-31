class umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
    this.x=x;
	this.y=y;
    this.r=r;
    this.image=loadImage("images/Walking Frame/walking_1.png")
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body);
    }
}