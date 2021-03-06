class Polygon {
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png")    
      World.add(world, this.image);
    }
    display(){
      //  var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      image(this.image, 0, 0, 100, 100);
      pop();
    }
  };
  