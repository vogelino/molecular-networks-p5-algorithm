var brother = {};
var sister = {};
var mother = {};
var vather = {};
var minFormAmout = 10;
var maxFormAmout = 100;
var formSizeVariation = 100;
var shapesWidth = 2;

function setup(){
    colorMode(HSB, 360, 100, 100, 100);
    createCanvas(document.body.clientWidth, document.body.clientHeight);
    background(0, 0, 100);

//  Associated to           hue, bri, sat
    brother.color = color( 126, 050, 072 );
    sister.color  = color( 191, 086, 100 );
    mother.color  = color( 238, 044, 089 );
    vather.color  = color( 004, 024, 097 );

//  Associated to   form function
    brother.form  = ellipse;
    sister.form   = rect;
    mother.form   = bezier;
    vather.form   = triangle;

    generateForms();
}

function draw() {
    // generateForms();
}

function generateForms() {
    noFill();
    strokeWeight(shapesWidth);
    stroke(brother.color);
    drawMothers();

    noFill();
    strokeWeight(shapesWidth);
    stroke(sister.color);
    drawMothers();

    noFill();
    strokeWeight(shapesWidth);
    stroke(mother.color);
    drawMothers();

    noFill();
    strokeWeight(shapesWidth);
    stroke(vather.color);
    drawMothers();
}

function drawBrothers() {
    for (var i = 0; i <= random(minFormAmout, maxFormAmout); i++) {
        noFill();
        var brotherWidth = random(5, 80);
        var brotherHeight = random(brotherWidth - formSizeVariation, brotherWidth + formSizeVariation);
        var brotherX = random(brotherWidth/2, (width - brotherWidth));
        var brotherY = random(brotherHeight/2, (height - brotherHeight));

        strokeWeight(shapesWidth);
        stroke(brother.color);
        brother.form(brotherX, brotherY, brotherWidth, brotherHeight);
    }
}

function drawSisters() {
    for (var i = 0; i <= random(minFormAmout, maxFormAmout); i++) {
        var sisterWidth = random(5, 200);
        var sisterHeight = 1;
        var sisterX = random(0, (width - sisterWidth));
        var sisterY = random(0, (height - sisterHeight));

        noStroke();
        fill(sister.color);
        sister.form(sisterX, sisterY, sisterWidth, sisterHeight);
    }
}

function drawMothers() {
    for (var i = 0; i <= random(minFormAmout, maxFormAmout); i++) {
        var sizeFactor = random(10, 60);
        var points = {
            one: {},
            two: {},
            three: {},
            four: {}
        };
        points.one.x = random(0, width);
        points.one.y = random(0, height);
        points.two.x = points.one.x + sizeFactor;
        points.two.y    = random(points.one.y - formSizeVariation, points.one.y + formSizeVariation);
        points.three.x  = random(points.two.x - formSizeVariation, points.two.x + formSizeVariation);
        points.three.y  = random(points.two.y - formSizeVariation, points.two.y + formSizeVariation) + sizeFactor;
        points.four.x   = random(points.one.x - formSizeVariation, points.one.x + formSizeVariation);
        points.four.y   = random(points.one.y - formSizeVariation, points.one.y + formSizeVariation) + sizeFactor;

        mother.form(
            points.one.x, points.one.y,
            points.two.x, points.two.y,
            points.three.x, points.three.y,
            points.four.x, points.four.y);

        // beginShape();
        // vertex(points.one.x, points.one.y);
        // bezierVertex(points.one.x, points.one.y, points.three.x, points.three.y, points.two.x, points.two.y, points.four.x, points.four.y);
        // endShape(CLOSE);
    }
}
