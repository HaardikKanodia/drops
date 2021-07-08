 class Drops {
     constructor(x,y) {
         var options = {
            'friction' : 0,
            'restitution' : 0,

         }

         this.rain=Bodies.circle(x,y,5,options);
         World.add(world,this.body);
     }


     

     updateY () {

        if(this.rain.position.y > height)  {
        Matter.Body.setPosition ( this.rain , {x:random(0,400), y:random(0,400)});
     }
    }

     showDrop () {
            fill("blue");
            ellipseMode(CENTER);
            ellipse(this.rain.position.x,this.rain.postion.y,5,5);
     
 }}


    



