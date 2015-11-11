let props = {};

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.class('p5-canevas');
	canvas.parent('main-canevas');

	colorMode(HSB, 360, 100, 100, 100);

	props = getDefaults();
	props.arcPoints.arcColor = getColor(30);

	generateEllipses();
}

function draw() {

	props.ellipses.forEach((theEllipse) => {
		drawEllipse(theEllipse);
	});

	props.ellipses.forEach((theEllipse, index) => {
		drawConnections(theEllipse, index);
	});

	noLoop();
}

function getDefaults() {
	return {
		maxClusterDepth: 3,
		ellipsesDistance: 10,
		arcPoints: {
			arcColor: getColor(20),
			arcWidth: 6
		},
		defaults : {
			ellipse: { x: 0, y: 0, size: 0, ellipseColor: getColor() }
		},
		backgroundColor: getColor(100),
		ellipses: []
	};
}

function getExtremeArcPoints(firstEllipse, nextEllipse) {
	let nextPos = {
		higher: firstEllipse.y > nextEllipse.y,
		lower: firstEllipse.y < nextEllipse.y,
		after: firstEllipse.x < nextEllipse.x,
		before: firstEllipse.x > nextEllipse.x
	};
	let points = { start: {}, end: {} };

	if (nextPos.higher && nextPos.after) {
		points.start = firstEllipse.arcPoints.top;
		points.end = nextEllipse.arcPoints.left;
	}
	else if (nextPos.lower && nextPos.after) {
		points.start = firstEllipse.arcPoints.bottom;
		points.end = nextEllipse.arcPoints.top;
	}
	else if (nextPos.lower && nextPos.before) {
		points.start = firstEllipse.arcPoints.bottom;
		points.end = nextEllipse.arcPoints.right;
	}
	else if (nextPos.higher && nextPos.before) {
		points.start = firstEllipse.arcPoints.left;
		points.end = nextEllipse.arcPoints.bottom;
	}
	else if (!nextPos.higher && !nextPos.lower && nextPos.after) {
		points.start = firstEllipse.arcPoints.right;
		points.end = nextEllipse.arcPoints.left;
	}
	else if (!nextPos.higher && !nextPos.lower && nextPos.before) {
		points.start = firstEllipse.arcPoints.left;
		points.end = nextEllipse.arcPoints.right;
	}
	else if (!nextPos.after && !nextPos.before && nextPos.higher) {
		points.start = firstEllipse.arcPoints.top;
		points.end = nextEllipse.arcPoints.bottom;
	}
	else if (!nextPos.after && !nextPos.before && nextPos.lower) {
		points.start = firstEllipse.arcPoints.bottom;
		points.end = nextEllipse.arcPoints.top;
	}

	return points;
}

function drawEllipse(theEllipse) {
	let { x, y, size, ellipseColor } = theEllipse;
	let ellipseCenter = size / 2;
	noStroke();
	fill(ellipseColor);
	ellipse(x, y, size, size);
	theEllipse.arcPoints = {
		top: {x, y: y - ellipseCenter},
		bottom: {x, y: y + ellipseCenter},
		left: {x: x - ellipseCenter, y},
		right: {x: x + ellipseCenter, y}
	};

	let { arcColor, arcWidth } = props.arcPoints;
	let { top, bottom, left, right } = theEllipse.arcPoints;

	noStroke();
	fill(arcColor);
	ellipse(top.x, top.y, arcWidth, arcWidth);
	ellipse(bottom.x, bottom.y, arcWidth, arcWidth);
	ellipse(left.x, left.y, arcWidth, arcWidth);
	ellipse(right.x, right.y, arcWidth, arcWidth);
}

function drawConnections(theEllipse, index) {
	let nextEllipse = props.ellipses[index + 1];
	if (!nextEllipse) { return; }
	let { start, end } = getExtremeArcPoints(theEllipse, nextEllipse);

	let pointsXDistance = (end.x - start.x);
	let pointsYDistance = (end.y - start.y);
	let diagonalDistance = Math.sqrt(Math.pow(pointsXDistance, 2) + Math.pow(pointsYDistance, 2))
	let centerInX = (end.x - start.x) / 2;
	let centerInY = (end.y - start.y) / 2;

	let { arcColor, arcWidth } = props.arcPoints;
	noFill()
	stroke(arcColor);
	strokeWeight(2);
	line(start.x, start.y, end.x, end.y)
}

function addElipse(x , y, size, ellipseColor) {
	x = x ? x : props.defaults.ellipse.x,
	y = y ? y : props.defaults.ellipse.x,
	size = size ? size : props.defaults.ellipse.size,
	ellipseColor = ellipseColor ? ellipseColor : props.defaults.ellipse.color
	props.ellipses.push({ x, y, size, ellipseColor });
	return props.ellipses[props.ellipses.length - 1];
}

function getColor(bri, hue, sat, alpha) {
	bri = bri ? bri : random(75, 100);
	hue = hue ? hue : random(110, 210);
	sat = sat ? sat : random(66, 100);
	alpha = alpha ? alpha : 100;
	return color(hue, sat, bri, alpha);
}

function generateEllipses() {
	let startSize = height / 18;
	let startEllipse = addElipse(width / 2, height / 2, startSize, getColor());

	createSiblings('top', 1, startEllipse);
	createSiblings('bottom', 1, startEllipse);
	createSiblings('right', 1, startEllipse);
	createSiblings('left', 1, startEllipse);
}

function createSiblings(dir, level, baseEllipse) {
	if (level >= props.maxClusterDepth) { return; }

	let {x, y, size, ellipseColor} = baseEllipse;
	let newSize = size * 0.8;
	let newDistance = props.ellipsesDistance * level;
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
	sibling.ellipseColor = getColor();

	addElipse(sibling.x, sibling.y, sibling.size, sibling.ellipseColor);
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
