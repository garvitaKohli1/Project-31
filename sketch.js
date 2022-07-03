const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var umbrella1

function preload(){
    
}

function setup(){
 createCanvas(600,600);

   umbrella1=new umbrella(300,300);
}

function draw(){
    
    umbrella1.display();
}   

