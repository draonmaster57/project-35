//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  
  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
}


//function to read values from DB
function readStock(data){
  food=data.val();
} 

//function to write values in DB
function writeStock(x){

if(x<=0){
    x=0;
}else{
  
  x=x-1;
}
    database.ref('/').update({
      food:x
  )}
}
function draw() {  

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
fill()
stroke()
}



