var Engine = Matter.Engine,
  World = Matter.World,
  //Events = Matter.Events,
  Bodies = Matter.Bodies;
  const Render=Matter.Render;
 
var particles = [];
var plinkos = [];
var Divisions = [];
var score=0,particle,count=0;
var gameState="PLAY";


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     Divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
    }
      });
    
      Render.run(render);
    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,10,30);
 textSize(30)
 text ("500",260,470)
 text ("500",180,470)
 text ("500",100,470)
 text ("500",20,470)
 text ("100",330,470)
 text ("100",410,470)
 text ("100",490,470)
 text ("200",570,470)
 text ("200",650,470)
 text ("200",730,470)
 //text ("count:"+count,100,30)
  Engine.update(engine);
  if (particle!=null)
  {
    particle.display();
    if(particle.body.position.y>700)
    {
      if(particle.body.position.x<300)
      {
        score=score+500
       particle=null
       if(count >= 5) gameState="end"
      }
    
    
   else if(particle.body.position.x> 301 && particle.body.position.x < 500 )
    {
     
        score=score+100
       particle=null
       if(count >= 5) gameState="end";
      
    }
    else if(particle.body.position.x> 501 && particle.body.position.x < 800 )
    {
     
        score=score+200
       particle=null
       if(count >= 5) gameState="end"
      
    }
    }
  }
 // if(frameCount%60===0){
   // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   // ;
 // }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < Divisions.length; k++) {
     
     Divisions[k].display();
   }
   if (gameState==="end"){
textSize(100)
text("GAMEOVER",100,400)

   }
}
function mousePressed()
{
  if( gameState=="PLAY"){
    count++;
    particle= new Particle(mouseX,10,10,10)
   
  }
}