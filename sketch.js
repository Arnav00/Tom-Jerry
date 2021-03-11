var cat,catI;
var garden,gardenI;
var jerry,jerry1,jerry4;



function preload() {
    //load the images here
catI = loadImage("cat2.png");
gardenI = loadImage("garden.png");
jerry1 = loadImage("mouse1.png");
jerry4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
     
    garden = createSprite(500,400);
    garden.addImage("gardenI",gardenI);

    //create tom and jerry sprites here

    cat = createSprite(900,700);
    cat.addImage("cat2.png",catI);
    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
