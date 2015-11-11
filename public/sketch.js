'use strict';

// BASE VARIABLES
var props = {
	groups: [],
	groupsAmount: 3,
	availableFormId: 0,
	circleMinSize: 10,
	lineWeight: 1,
	backgroundColor: 'whitesmoke',
	wrapperSize: 50,
	colorIndex: 0,
	mainBrightness: 90,
	mainColor: false
};

// SETUP
function setup() {
	initCanvas();

	background(props.backgroundColor);
	props.mainColor = color(0, 0, props.mainBrightness, 100);

	console.log('Generating ' + props.groupsAmount + ' groups');
	props.groups = addGroups(props.groupsAmount);
	console.log(props.groupsAmount + ' groups generated');
}

function draw() {
	noLoop();
}

function initCanvas() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
}

// GENERATE CONTENTS
function addGroups(groupsAmount) {
	var groups = [];
	for (var i = 1; i <= groupsAmount; i++) {
		var mainBrightness = props.mainBrightness;
		var mainColor = props.mainColor;

		var oldBrightness = mainColor._getBrightness();
		groups.push(addGroup(i));
		var newBrightness = oldBrightness - i * (groupsAmount * (groupsAmount * i));

		props.mainColor = color(0, 0, newBrightness, 100);
	}
	return groups;
}

function addGroup(id) {
	var rows = Math.ceil(width / props.wrapperSize) + 1;
	var columns = Math.ceil(width / props.wrapperSize) + 1;
	var formPosX = 0 - props.wrapperSize / 2;
	var formPosY = formPosX;
	var columnPosX = formPosX;
	var rowPosY = formPosY;
	var forms = [];
	var groupId = props.groups.length;

	for (var row = 1; row <= rows; row++) {
		for (var column = 1; column <= columns; column++) {
			var form = addForm(props.availableFormId, props.mainColor, columnPosX, rowPosY, props.wrapperSize, row, column);
			forms.push(form);
			columnPosX = column === columns ? formPosX : columnPosX + props.wrapperSize;
			props.availableFormId++;
		};
		rowPosY = row === rows ? formPosY : rowPosY + props.wrapperSize;
	};

	var group = {
		id: id,
		rows: rows,
		columns: columns,
		forms: forms
	};

	group.connections = addConnections(group);

	console.log('Generated Group with id: ' + group.id, group);
	return group;
}

function addForm(id, circleColor, x, y, size, row, column) {
	var hasCircle = random(0, 2) < 1;
	var circleSize = random(props.circleMinSize, props.wrapperSize - 5);
	var circleX = x + props.wrapperSize / 2;
	var circleY = y + props.wrapperSize / 2;
	var form = {
		id: id,
		x: x,
		y: y,
		row: row,
		column: column,
		circle: hasCircle ? false : {
			x: circleX,
			y: circleY,
			size: circleSize,
			circleColor: circleColor
		}
	};
	if (form.circle) {
		var circleCenter = circleSize / 2;
		form.circle.arcPoints = {
			top: { x: circleX, y: circleY - circleCenter },
			bottom: { x: circleX, y: circleY + circleCenter },
			left: { x: circleX - circleCenter, y: circleY },
			right: { x: circleX + circleCenter, y: circleY }
		};
	}

	drawForm(form);
	return form;
}

function getExtremeArcPoints(firstCircle, nextCircle) {
	var points = {};
	points.start = firstCircle.arcPoints[dir];

	switch (dir) {
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
	var x = wrapper.x;
	var y = wrapper.y;
	var circle = wrapper.circle;

	noFill();
	noStroke();
	rect(x, y, props.wrapperSize, props.wrapperSize);
	if (circle) {
		noFill();
		stroke(circle.circleColor);
		strokeWeight(props.lineWeight);
		ellipse(circle.x, circle.y, circle.size, circle.size);
	}
}

function addConnections(group) {
	var connections = [];
	var columns = group.columns;
	var rows = group.rows;

	group.forms.forEach(function (form, index) {
		var isFirstColumn = form.column === 1;
		var isFirstRow = form.row === 1;
		var isLastRow = form.row === rows;
		var isLastColumn = form.column === columns;
		var rightSibling = undefined,
		    leftSibling = undefined,
		    topSibling = undefined,
		    bottomSibling = undefined;

		if (!isFirstRow) {
			topSibling = getFormByPosition(group, form.row - 1, form.column);
			connections.push(addConnection('top', form, topSibling));
		}
		if (!isFirstColumn) {
			leftSibling = getFormByPosition(group, form.row, form.column - 1);
			connections.push(addConnection('left', form, leftSibling));
		}
		if (!isLastRow) {
			bottomSibling = getFormByPosition(group, form.row + 1, form.column);
			connections.push(addConnection('bottom', form, bottomSibling));
		}
		if (!isLastColumn) {
			rightSibling = getFormByPosition(group, form.row, form.column + 1);
			connections.push(addConnection('right', form, rightSibling));
		}
	});

	return connections;
}

function addConnection(dir, startForm, endForm) {
	if (!startForm.circle || !endForm.circle) {
		return;
	}
	var startPoint = {};
	var endPoint = {};
	switch (dir) {
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
	strokeWeight(props.lineWeight);
	line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

	return { startPoint: startPoint, endPoint: endPoint };
}

// GETTERS
function getFormById(id) {
	var allForms = [];
	props.groups.forEach(function (group) {
		allForms.concat(group.forms);
	});
	return allForms.filter(function (form) {
		return form.id === id;
	})[0];
}

function getFormByPosition(group, row, column) {
	return group.forms.filter(function (form) {
		return form.row === row && form.column == column;
	})[0];
}