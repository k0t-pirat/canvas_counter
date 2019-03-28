var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle="green";
ctx.strokeStyle = "green";

drawIndicator(20, {x: 20, y: 20});
drawIndicator(20, {x: 140, y: 20});
drawIndicator(20, {x: 260, y: 20});

function drawSegment(rectSize, beginPoint, direction) {
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
	ctx.stroke();
}

function drawIndicator(baseSize, basePoint) {
	var beginPoints = [];
	beginPoints.push({x: basePoint.x + baseSize / 2, y: basePoint.y + baseSize});
	beginPoints.push({x: basePoint.x + baseSize / 2 + baseSize * 3, y: basePoint.y + baseSize});
	beginPoints.push({x: basePoint.x + baseSize / 2, y: basePoint.y + baseSize + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize / 2 + baseSize * 3, y: basePoint.y + baseSize + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2 + baseSize * 3});
	beginPoints.push({x: basePoint.x + baseSize, y: basePoint.y + baseSize / 2 + baseSize * 6});

	drawSegment(baseSize, beginPoints[0], 'vertical');
	drawSegment(baseSize, beginPoints[1], 'vertical');
	drawSegment(baseSize, beginPoints[2], 'vertical');
	drawSegment(baseSize, beginPoints[3], 'vertical');
	drawSegment(baseSize, beginPoints[4], 'horizontal');
	drawSegment(baseSize, beginPoints[5], 'horizontal');
	drawSegment(baseSize, beginPoints[6], 'horizontal');
}
