let props = {};

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.class('p5-canevas');
	canvas.parent('main-canevas');

	colorMode(HSB, 360, 100, 100, 100);

	props = getDefaults();

	background(props.backgroundColor);
	generateGroups();
	props.groups.forEach((group) => {
		drawConnections(group);
	});
}

function draw() {
	noLoop();
}

function getDefaults() {
	return {
		availableFormId: 0,
		maxClusterDepth: 3,
		circlesDistance: random(1, 15),
		circleMinSize: 10,
		arcWidth: 3,
		arcStrokeWeigth: 1,
		defaults : {
			circle: { x: 0, y: 0, size: 0, circleColor: getColor() }
		},
		backgroundColor: 'whitesmoke',
		groups: [],
		wrapperSize: 50
	};
}

function getExtremeArcPoints(firstCircle, nextCircle) {
	let points = {};
	points.start = firstCircle.arcPoints[dir];

	switch(dir) {
		case 'right':
			points.end = nextCircle.arcPoints.left;
		break;
		case 'left':
			points.end = nextCircle.arcPoints.right;
		break;
		case 'top':
			points.end = nextCircle.arcPoints.bottom;
		break;
		case 'bottom':
			points.end = nextCircle.arcPoints.top;
		break;
	}

	return points;
}

function drawForm(wrapper) {
	let { x, y, circle } = wrapper;
	stroke('whitesmoke');
	strokeWeight(1);
	noFill();
	rect(x, y, props.wrapperSize, props.wrapperSize);
	if (circle) {
		noStroke();
		fill(circle.circleColor);
		ellipse(circle.x, circle.y, circle.size, circle.size);
	}
}

function drawConnections(group) {
	let { columns, rows } = group;

	group.forms.forEach((form, index) => {
			let isFirstColumn = form.column === 1;
			let isFirstRow = form.row === 1;
			let isLastRow = form.row === rows;
			let isLastColumn = form.column === columns;
			let rightSibling, leftSibling, topSibling, bottomSibling;

			if (!isFirstRow) {
				topSibling = getFormByPosition(group, form.row - 1, form.column);
				drawConnection('top', form, topSibling);
			}
			if (!isFirstColumn) {
				leftSibling = getFormByPosition(group, form.row, form.column - 1);
				drawConnection('left', form, leftSibling);
			}
			if (!isLastRow) {
				bottomSibling = getFormByPosition(group, form.row + 1, form.column);
				drawConnection('bottom', form, bottomSibling);
			}
			if (!isLastColumn) {
				rightSibling = getFormByPosition(group, form.row, form.column + 1);
				drawConnection('right', form, rightSibling);
			}
	});
}

function drawConnection(dir, startForm, endForm) {
	if (!endForm) { debugger };
	if (!startForm.circle || !endForm.circle) { return; }
	let startPoint = {};
	let endPoint = {};
	console.log(startForm.circle.arcPoints, endForm.circle.arcPoints);
	switch(dir) {
		case 'right':
			startPoint = startForm.circle.arcPoints.right;
			endPoint = endForm.circle.arcPoints.left;
		break;
		case 'left':
			startPoint = startForm.circle.arcPoints.left;
			endPoint = endForm.circle.arcPoints.right;
		break;
		case 'top':
			startPoint = startForm.circle.arcPoints.top;
			endPoint = endForm.circle.arcPoints.bottom;
		break;
		case 'bottom':
			startPoint = startForm.circle.arcPoints.bottom;
			endPoint = endForm.circle.arcPoints.top;
		break;
	}

	stroke(endForm.circle.circleColor);
	strokeWeight(props.arcStrokeWeigth);
	line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
}

function addForm(id, x , y, size, row, column) {
	let hasCircle = Math.floor(random(0,3)) === 1;
	let circleSize = random(props.circleMinSize, props.wrapperSize - 5);
	let circleX = x + (props.wrapperSize / 2);
	let circleY = y + (props.wrapperSize / 2);
	let form = {
		id,
		x,
		y,
		row,
		column,
		circle: hasCircle ? false : {
			x: circleX,
			y: circleY,
			size: circleSize,
			circleColor: getColor()
		}
	};
	if (form.circle) {
		let circleCenter = circleSize / 2;
		form.circle.arcPoints = {
			top: {x: circleX, y: circleY - circleCenter},
			bottom: {x: circleX, y: circleY + circleCenter},
			left: {x: circleX - circleCenter, y: circleY},
			right: {x: circleX + circleCenter, y: circleY}
		};
	}
	return form;
}

function getFormById(id) {
	let allForms = [];
	props.groups.forEach((group) => {
		allForms.concat(group.forms);
	});
	return allForms.filter((form) => {
		return form.id === id;
	})[0];
}

function getFormByPosition(group, row, column) {
	return group.forms.filter((form) => {
		return form.row === row && form.column == column;
	})[0];
}

function getColor(bri, hue, sat, alpha) {
	bri = bri ? bri : random(50, 75);
	hue = hue ? hue : random(190, 200);
	sat = sat ? sat : random(33, 66);
	alpha = alpha ? alpha : 100;
	return color(hue, sat, bri, alpha);
}

function generateGroups() {
	let rows = Math.floor(random(2,10));
	let columns = Math.floor(random(2,10));
	let formPosX = Math.floor(random(1, 30)) * props.wrapperSize;
	let formPosY = Math.floor(random(1, 15)) * props.wrapperSize;
	let columnPosX = formPosX;
	let rowPosY = formPosY;
	let forms = [];
	let groupId = props.groups.length;

	for (let row = 1; row <= rows; row++) {
		for (let column = 1; column <= columns; column++) {
			let form = addForm(
				props.availableFormId,
				columnPosX,
				rowPosY,
				props.wrapperSize,
				row,
				column
			);
			drawForm(form);
			forms.push(form);
			columnPosX = column === columns ? formPosX : columnPosX + props.wrapperSize;
			props.availableFormId++;
		};
		rowPosY = row === rows ? formPosY : rowPosY + props.wrapperSize;
	};

	props.groups.push({
		id: props.groups.length,
		rows: rows,
		columns: columns,
		forms: forms
	});
}
