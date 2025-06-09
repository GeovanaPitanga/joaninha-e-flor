function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(55, 56, 535);
  //sun in top-right corner
  fill("yellow");
  circle(60, 60, 100);
 
  //grass on bottom half
  fill("green");
  rect(0, 200, 600, 200);
 
  //emojis
  textSize(55)
  text("🌸", 100, 250) //flower
  text("🐞", mouseX, mouseY) //ladybug
}