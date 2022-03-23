
function preload(){
//carregamento de imagem e animação
seaImg= loadImage("sea.png");
shipImg1= loadAnimation( "ship-1.png", "ship-2.png" , "ship-3.png" , "ship-4.png" );

}

function setup(){
createCanvas(400,400);
//criação de sprites
var ship =createSprite(200,200,20,20);
var sea =createSprite(200,320,20,20);

}

function draw() {
background("blue");
//add imagens ao mar e navio
sea.addImage(seaImg);
ship.addImage(shipImg1);   
//add velocidade ao plano de fundo
if(sea.x <0){
sea.x = sea.width/2;
}
  
drawSprites();

 
}
