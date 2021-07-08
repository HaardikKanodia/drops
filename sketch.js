  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var Maxdrops=100;
var thunder;    
var drop=[];

function preload(){
    thunderboltimage1=loadImage('images/thunderbolt/1.png');
    thunderboltimage2=loadImage('images/thunderbolt/2.png');
    thunderboltimage3=loadImage('images/thunderbolt/3.png');
    thunderboltimage4=loadImage('images/thunderbolt/4.png');
    walkingman1=loadImage('images/Walking Frame/walking_1.png');
    walkingman2=loadImage('images/Walking Frame/walking_2.png');
    walkingman3=loadImage('images/Walking Frame/walking_3.png');
    walkingman4=loadImage('images/Walking Frame/walking_4.png');
    walkingman5=loadImage('images/Walking Frame/walking_5.png');
    walkingman6=loadImage('images/Walking Frame/walking_6.png');
    walkingman7=loadImage('images/Walking Frame/walking_7.png');
    walkingman8=loadImage('images/Walking Frame/walking_8.png');

  



}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


    if(frameCount%150===0) {
        for(var i=0;i<Maxdrops;i++) {
       drop.push(new Drops(random(0,400), random(0,400)));
        }
        
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);



    rand= Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedframe=frameCount;
        thunder= createSprite (random(10,370),random(10,30),10,10);
        switch(rand) {
            case 1 : thunder.addImage(thunderboltimage1);
            break;
            case 2 : thunder. addImage(thunderboltimage2);
            break;
            case 3 : thunder. addImage(thunderboltimage3);
            break;
            case 4 : thunder. addImage(thunderboltimage4);
            break;
        }
        thunder.scale= random(0.3,0.6);
    }


    
drawSprites();

}   

