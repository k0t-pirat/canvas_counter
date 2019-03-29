var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var indicatorArray = [];

ctx.fillStyle="yellow";
ctx.strokeStyle = "gray";

refreshCanvas();

function drawSegment(rectSize, beginPoint, direction, drawType) {
	var axisRatio = {};
	var endPoint = {};

	if (direction === 'vertical') {
		axisRatio.x = -1;
		axisRatio.y = 1;
		endPoint.x = beginPoint.x;
		endPoint.y = beginPoint.y + rectSize * 2;
	}
	else if (direction === 'horizontal') {
		axisRatio.x = 1;
		axisRatio.y = -1;
		endPoint.x = beginPoint.x + rectSize * 2;
		endPoint.y = beginPoint.y;
	}

	ctx.beginPath();
	ctx.moveTo(beginPoint.x + rectSize / 2, beginPoint.y + rectSize / 2);
	ctx.lineTo(beginPoint.x, beginPoint.y);
	ctx.lineTo(beginPoint.x + (rectSize / 2) * axisRatio.x, beginPoint.y + (rectSize / 2) * axisRatio.y);
	ctx.lineTo(endPoint.x - rectSize / 2, endPoint.y - rectSize / 2);
	ctx.lineTo(endPoint.x, endPoint.y);
	ctx.lineTo(endPoint.x - (rectSize / 2) * axisRatio.x, endPoint.y - (rectSize / 2) * axisRatio.y);
	ctx.closePath();
	ctx[drawType]();
}

function drawIndicator(baseSize, basePoint, drawType, digit) {
	var beginPoints = [];
	beginPoints.push({x: basePoint.x + baseSize / 2, y: basePoint.y + baseSize});
	beginPoints.push({x: basePoint.x + baseSize / 2 + baseSize * 3, y: basePoint.y + baseSize});
	beginPoints.push({x: basePoint.x + baseSize / 2, y: basePoint.y + baseSize + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize / 2 + baseSize * 3, y: basePoint.y + baseSize + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2 + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2 + baseSize * 6});

	if (['all', 0, 4, 5, 6, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[0], 'vertical', drawType);
	if (['all', 0, 1, 2, 3, 4, 7, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[1], 'vertical', drawType);
	if (['all', 0, 2, 6, 8].includes(digit)) drawSegment(baseSize, beginPoints[2], 'vertical', drawType);
	if (['all', 0, 1, 3, 4, 5, 6, 7, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[3], 'vertical', drawType);
	if (['all', 0, 2, 3, 5, 6, 7, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[4], 'horizontal', drawType);
	if (['all', 'dash', 2, 3, 4, 5, 6, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[5], 'horizontal', drawType);
	if (['all', 0, 2, 3, 5, 6, 8, 9].includes(digit)) drawSegment(baseSize, beginPoints[6], 'horizontal', drawType);
}

function drawBlankIndicator(baseSize, basePoint) {
	var index = indicatorArray.length;
	drawIndicator(baseSize, basePoint, 'stroke', 'all');
	indicatorArray.push({baseSize: baseSize, basePoint: basePoint, index: index});
}

function drawDigit(digit, indicatorIndex) {
	var indicator = indicatorArray.find(function(currentIndicator) {
		return currentIndicator.index === indicatorIndex;
	});
	drawIndicator(indicator.baseSize, indicator.basePoint, 'fill', digit);
}

function drawNumber(number) {
	refreshCanvas();
	var n = parseInt(number) || 0;
	var value = [];
	do {
		value.push(n % 10);
		n = Math.floor(n / 10);
	} while (n !== 0);

	if (value.length > indicatorArray.length) {
		for (var i = 0; i < indicatorArray.length; i++) {
			drawDigit('dash', indicatorArray.length - i - 1);
		}
		return;
	}

	for (var i = 0; i < indicatorArray.length; i++) {
		drawDigit(value[i], indicatorArray.length - i - 1);
	}
}

function refreshCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	indicatorArray = [];
	drawBlankIndicator(20, {x: 20, y: 20});
	drawBlankIndicator(20, {x: 140, y: 20});
	drawBlankIndicator(20, {x: 260, y: 20});
	drawBlankIndicator(20, {x: 380, y: 20});
}
