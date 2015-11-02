var w = 30;
var h = w;
var x = -w;
var y = 20;
var a = 0.1;
var canvasWidth = 300;
var myHue = 0;
// getting started with p5js
function setup(){
    colorMode(HSL, 360, 100, 100, 100);
    createCanvas(canvasWidth, canvasWidth);
    y = height/2;
}
function draw(){
    fill(myHue, 40, 75, 100);
    rect(0, 0, height, width);
    myHue = myHue + 1;

    strockeWeight(10);
    stroke(100,0,100,100);
    line(0, height/2, width, height/2);
    noStroke();

    fill(0,0,100,100);
    ellipse(x,y,width,height);

    x = x + 5;
    y = (height/2) + random(-5, 5);

    if (x > width) {
        x = 0;
    }
}
