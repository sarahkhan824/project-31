class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);

      for(var i = 20; i <=width; i=i+50)
    { 
      push(new Plinko(i,75));
      }
      for(var i = 15;i <= width-10; i=i+50)
      {
        push(new Plinko(i,175));
      }
    }
  }
