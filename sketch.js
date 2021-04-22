var f,m,n,t;

function setup() {
  createCanvas(1200,800);
  f=createSprite(600, 400, 50, 80);
  m=createSprite(400,200,80,30);
  f.shapeColor="pink";
  m.shapeColor="pink";

  // n=createSprite(400, 400, 50, 80);
  // t=createSprite(400,200,80,30);
  // n.shapeColor="red";
  // t.shapeColor="red";

  g1=createSprite(100,100,50,50);
  g1.shapeColor="green";
  g2=createSprite(200,100,50,50);
  g2.shapeColor="green";
  g3=createSprite(300,100,50,50);
  g3.shapeColor="green";
  g4=createSprite(400,100,50,50);
  g4.shapeColor="green";
}

function draw() {
  background(0);  
  m.x=World.mouseX;
  m.y=World.mouseY;

  // t.x=World.mouseX;
  // t.y=World.mouseY;

  if(isTouching(m,g4)){
    m.shapeColor="magenta";
    g4.shapeColor="magenta";
  }
  else{
    g4.shapeColor="pink";
    m.shapeColor="pink"; 
  }

  //   if(n.x-t.x<t.width/2+n.width/2
  //     && t.x-n.x<t.width/2+n.width/2
  //     && t.y-n.y<t.height/2+n.height/2
  //     && n.y-t.y<t.height/2+t.height/2){
  // n.shapeColor="purple";
  // t.shapeColor="purple";
  //     }
  //     else{
  //       t.shapeColor="red";
  //       n.shapeColor="red";  
  //     }
  drawSprites();
}
