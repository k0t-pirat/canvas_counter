var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle="green";
drawSegmentVertical(20, {x: 30, y: 40}, {x: 30, y: 80});
drawSegmentVertical(20, {x: 90, y: 40}, {x: 90, y: 80});
drawSegmentVertical(20, {x: 30, y: 100}, {x: 30, y: 140});
drawSegmentVertical(20, {x: 90, y: 100}, {x: 90, y: 140});
drawSegmentHorizontal(20, {x: 40, y: 30}, {x: 80, y: 30});
drawSegmentHorizontal(20, {x: 40, y: 90}, {x: 80, y: 90});
drawSegmentHorizontal(20, {x: 40, y: 150}, {x: 80, y: 150});

//rectSize = 20 beginPoint = {x: 30, y: 40} endPoint = {x: 30, y: 80}
function drawSegmentVertical(rectSize, beginPoint, endPoint) {
	ctx.fillRect(beginPoint.x - rectSize / 2, beginPoint.y + rectSize / 2, rectSize, rectSize);

	ctx.beginPath();
	ctx.moveTo(beginPoint.x, beginPoint.y);
	ctx.lineTo(beginPoint.x - rectSize / 2, beginPoint.y + rectSize / 2);
	ctx.lineTo(beginPoint.x + rectSize / 2, beginPoint.y + rectSize / 2);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(endPoint.x, endPoint.y);
	ctx.lineTo(endPoint.x - rectSize / 2, endPoint.y - rectSize / 2);
	ctx.lineTo(endPoint.x + rectSize / 2, endPoint.y - rectSize / 2);
	ctx.fill();
	ctx.closePath();
}
//rectSize = 20 beginPoint = {x: 30, y: 40} endPoint = {x: 30, y: 80}
function drawSegmentHorizontal(rectSize, beginPoint, endPoint) {
	ctx.fillRect(beginPoint.x + rectSize / 2, beginPoint.y - rectSize / 2, rectSize, rectSize);

	ctx.beginPath();
	ctx.moveTo(beginPoint.x, beginPoint.y);
	ctx.lineTo(beginPoint.x + rectSize / 2, beginPoint.y - rectSize / 2);
	ctx.lineTo(beginPoint.x + rectSize / 2, beginPoint.y + rectSize / 2);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(endPoint.x, endPoint.y);
	ctx.lineTo(endPoint.x - rectSize / 2, endPoint.y - rectSize / 2);
	ctx.lineTo(endPoint.x - rectSize / 2, endPoint.y + rectSize / 2);
	ctx.fill();
	ctx.closePath();
}

//first segment
// ctx.fillRect(20,50,20,20);
//
// ctx.beginPath();
// ctx.moveTo(30,40);
// ctx.lineTo(20,50);
// ctx.lineTo(40,50);
// ctx.fill();
// ctx.closePath();
//
// ctx.beginPath();
// ctx.moveTo(30,80);
// ctx.lineTo(20,70);
// ctx.lineTo(40,70);
// ctx.fill();
// ctx.closePath();

//second segment
// ctx.fillRect(50,20,20,20);
//
// ctx.beginPath();
// ctx.moveTo(40,30);
// ctx.lineTo(50,20);
// ctx.lineTo(50,40);
// ctx.fill();
// ctx.closePath();
//
// ctx.beginPath();
// ctx.moveTo(80,30);
// ctx.lineTo(70,20);
// ctx.lineTo(70,40);
// ctx.fill();
// ctx.closePath();
