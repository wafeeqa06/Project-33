class Snow {
    constructor(x, y) {

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage("snow4.webp");
        this.Visiblity = 255;
        
        World.add(world, this.body);

    }
    
     display(){
       //console.log(this.body.speed);
       if(this.body.position < 350){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
    }


};
    
