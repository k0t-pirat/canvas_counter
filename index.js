var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle="green";

drawSegment(20, {x: 30, y: 40}, 'vertical');
drawSegment(20, {x: 90, y: 40}, 'vertical');
drawSegment(20, {x: 30, y: 100}, 'vertical');
drawSegment(20, {x: 90, y: 100}, 'vertical');
drawSegment(20, {x: 40, y: 30}, 'horizontal');
drawSegment(20, {x: 40, y: 90}, 'horizontal');
drawSegment(20, {x: 40, y: 150}, 'horizontal');

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

	ctx.fillRect(beginPoint.x + (rectSize / 2) * axisRatio.x, beginPoint.y + (rectSize / 2) * axisRatio.y, rectSize, rectSize);

	ctx.beginPath();
	ctx.moveTo(beginPoint.x, beginPoint.y);
	ctx.lineTo(beginPoint.x + (rectSize / 2) * axisRatio.x, beginPoint.y + (rectSize / 2) * axisRatio.y);
	ctx.lineTo(beginPoint.x + rectSize / 2, beginPoint.y + rectSize / 2);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(endPoint.x, endPoint.y);
	ctx.lineTo(endPoint.x - rectSize / 2, endPoint.y - rectSize / 2);
	ctx.lineTo(endPoint.x - (rectSize / 2) * axisRatio.x, endPoint.y - (rectSize / 2) * axisRatio.y);
	ctx.fill();
	ctx.closePath();
}
