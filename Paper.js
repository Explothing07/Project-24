class Paper{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        ellipse(pos.x, pos.y, this.diameter);
        if(pos.x<650){
          Body.applyForce(this.body,{x: this.body.position.x, y: this.body.position.y},{x: 3, y: -20});
        };
      }
}