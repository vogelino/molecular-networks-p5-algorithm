let props = {};

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.class('p5-canevas');
	canvas.parent('main-canevas');

	colorMode(HSB, 360, 100, 100, 100);

	props = getDefaults();

	background(props.backgroundColor);
	for (var i = 0; i < random(20, 20); i++) {
		generateEllipses();
	}
}

function draw() {
	noLoop();
}

function getDefaults() {
	return {
		maxClusterDepth: 3,
		ellipsesDistance: random(1, 15),
		arcWidth: 3,
		arcStrokeWeigth: 1,
		defaults : {
			ellipse: { x: 0, y: 0, size: 0, ellipseColor: getColor() }
		},
		backgroundColor: 'whitesmoke',
		ellipses: []
	};
}

function getExtremeArcPoints(firstEllipse, nextEllipse, dir) {
	let points = {};
	points.start = firstEllipse.arcPoints[dir];

	switch(dir) {
		case 'right':
			points.end = nextEllipse.arcPoints.left;
		break;
		case 'left':
			points.end = nextEllipse.arcPoints.right;
		break;
		case 'top':
			points.end = nextEllipse.arcPoints.bottom;
		break;
		case 'bottom':
			points.end = nextEllipse.arcPoints.top;
		break;
	}

	return points;
}

function drawEllipse(theEllipse) {
	let { x, y, size, ellipseColor } = theEllipse;
	noStroke();
	fill(ellipseColor);
	ellipse(x, y, size, size);
}

function drawConnections(baseEllipse, nextEllipse, dir) {
	let { start, end } = getExtremeArcPoints(baseEllipse, nextEllipse, dir);
	let { arcWidth, arcStrokeWeigth } = props;
	noFill()
	stroke(baseEllipse.ellipseColor);
	strokeWeight(arcStrokeWeigth);
	line(start.x, start.y, end.x, end.y);
}

function addElipse(x , y, size, ellipseColor) {
	x = x ? x : props.defaults.ellipse.x,
	y = y ? y : props.defaults.ellipse.x,
	size = size ? size : props.defaults.ellipse.size,
	ellipseColor = ellipseColor ? ellipseColor : props.defaults.ellipse.color
	let ellipseCenter = size / 2;
	let arcPoints = {
		top: {x, y: y - ellipseCenter},
		bottom: {x, y: y + ellipseCenter},
		left: {x: x - ellipseCenter, y},
		right: {x: x + ellipseCenter, y}
	};
	props.ellipses.push({ x, y, size, ellipseColor, arcPoints });
	return props.ellipses[props.ellipses.length - 1];
}

function getColor(bri, hue, sat, alpha) {
	bri = bri ? bri : random(50, 75);
	hue = hue ? hue : random(190, 200);
	sat = sat ? sat : random(33, 66);
	alpha = alpha ? alpha : 100;
	return color(hue, sat, bri, alpha);
}

function generateEllipses() {
	let startSize = random(10,100);
	let randomPosX = random(0, width);
	let randomPosY = random(0, height);
	let startEllipse = addElipse(randomPosX, randomPosY, startSize, getColor());
	drawEllipse(startEllipse);

	createSiblings('top', 1, startEllipse);
	createSiblings('bottom', 1, startEllipse);
	createSiblings('right', 1, startEllipse);
	createSiblings('left', 1, startEllipse);
}

function createSiblings(dir, level, baseEllipse) {
	if (level >= random(1, 4)) { return; }

	let {x, y, size, ellipseColor} = baseEllipse;
	let newSize = size * 0.6;
	let ellipsesDistance = random(props.ellipsesDistance - 5, props.ellipsesDistance + 5);
	let newDistance = ellipsesDistance * level * 1.5;
	let sibling;

	if (dir === 'right') {
		sibling = {
			x: x + (size / 2) + newDistance + (newSize / 2),
			y,
		};
	}
	else if (dir === 'left') {
		sibling = {
			x: x - (size / 2) - newDistance - (newSize / 2),
			y
		};
	}
	else if (dir === 'top') {
		sibling = {
			x,
			y: y - (size / 2) - newDistance - (newSize / 2),
		};
	}
	else if (dir === 'bottom') {
		sibling = {
			x,
			y: y + (size / 2) + newDistance + (newSize / 2)
		};
	}
	sibling.size = newSize;
	sibling.ellipseColor = color(
		baseEllipse.ellipseColor.getHue(),
		baseEllipse.ellipseColor.getSaturation() - (level * 2),
		baseEllipse.ellipseColor.getBrightness() + (level * 4),
		baseEllipse.ellipseColor.getAlpha()
	);

	sibling = addElipse(sibling.x, sibling.y, sibling.size, sibling.ellipseColor);
	drawEllipse(sibling);
	drawConnections(baseEllipse, sibling, dir);
	switch(dir) {
		case 'right':
			createSiblings('top', level + 1, sibling);
			createSiblings('right', level + 1, sibling);
			createSiblings('bottom', level + 1, sibling);
		break;
		case 'top':
			createSiblings('top', level + 1, sibling);
			createSiblings('right', level + 1, sibling);
			createSiblings('left', level + 1, sibling);
		break;
		case 'left':
			createSiblings('top', level + 1, sibling);
			createSiblings('bottom', level + 1, sibling);
			createSiblings('left', level + 1, sibling);
		break;
		case 'bottom':
			createSiblings('right', level + 1, sibling);
			createSiblings('bottom', level + 1, sibling);
			createSiblings('left', level + 1, sibling);
		break;
	}
}
