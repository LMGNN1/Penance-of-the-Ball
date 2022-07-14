let gribX, gribY, greebX, greebY, yay, canvas, h1, mn, sc, elapsedTime, inp, timerStart, clr1, clr2, clr3, val1, val2, val3;
function setup() {
  h1 = createElement('h1', 'PENANCE OF THE BALL')
  button = createButton('Retry')
  canvas = createCanvas(800, 800);
  sc = second()
  mn = minute()
  ml = millis()
  val1 = 220
  val2 = 220
  val3 = 100
  timerStart = 0
  gribX = random(150, 730);
  greebX = random(11, 14);
  gribY = random(75, 730);
  greebY = random(7, 9);
  ellipY = 400;
  r1 = 25;
  r2 = 70;
  textSize(width / 5);
  textAlign(CENTER, CENTER);
  textFont("inconsolata");
  yay = floor(random(1, 30))
  button.mousePressed(reload)
}

function draw() {
 //Object Detection
  let d = dist(mouseX, ellipY, gribX, gribY);
  if (d < r1 + r2){
    val1 = val1 + 25
    val2 = val2 - 170
    val3 = val3 - 50
  }
  background(val1, val2, val3);
  let currentTime = int(millis()/1000)
  textSize(100)
  text(currentTime, windowWidth/25, windowHeight/12)
  if (d > r1 + r2) {
    fill(200, 10, 10);
    ellipse(mouseX, ellipY, r1 * 2, r1 * 2);
    fill(0, 0, 0);
    ellipse(gribX, gribY, r2 * 2, r2 * 2);
    gribX = gribX + greebX;
    gribY = gribY + greebY;
  } else {
    fill(0, 0, 0)
    ellipse(mouseX, ellipY, r1 * 2, r1 * 2);
    fill(0, 0, 0)
    textSize(150)
    text("OOPS", 400, 200);
    textSize(150)
    text("YOU LOSE", 400, 600);
    setInterval(greebX, infinity)
    setInterval(greebY, infinity)
    setInterval(mouseX, infinity)
  }

  //Keeps the balls in the canvas
  if (mouseX > 775) {
    mouseX = 775;
  }
  if (mouseX < 30) {
    mouseX = 25;
  }

  if (gribX > width - r2) {
    greebX = -greebX;
  }
  if (gribY > height - r2) {
    greebY = -greebY;
  }
  if (gribX < r2) {
    greebX = -greebX;
  }
  if (gribY < r2) {
    greebY = -greebY;
  }
  if (yay==5){
    fill(255, 255, 255)
    ellipse(mouseX-15, ellipY-6, 15, 15)
    fill(255, 255, 255)
    ellipse(mouseX+15, ellipY-6, 15, 15)
    fill(0, 0, 0)
    ellipse(mouseX-15, ellipY-6, 7, 7)
    fill(0, 0, 0)
    ellipse(mouseX+15, ellipY-6, 7, 7)
}

canvas.position(windowWidth/3, windowHeight/6)
h1.position(windowWidth/3, windowHeight/24)
button.position(windowWidth/3, windowHeight/2.5)
}

function reload(){
  window.location.reload()
}
