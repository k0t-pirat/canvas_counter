var setNumber = document.getElementById('setNumber');
var setIndicatorsAmount = document.getElementById('setIndicatorsAmount');
var setIndicatorBaseSize = document.getElementById('setIndicatorBaseSize');

setNumber.addEventListener('change', function(evt) {
  clearCanvas();
  drawNumberHolder(indicatorBaseSize, numberHolderSize);
  drawNumber(parseInt(evt.target.value));
});

setIndicatorsAmount.addEventListener('change', function(evt) {
  clearCanvas();
  drawNumberHolder(indicatorBaseSize, parseInt(evt.target.value));
  numberHolderSize = parseInt(evt.target.value);
});

setIndicatorBaseSize.addEventListener('change', function(evt) {
  clearCanvas();
  drawNumberHolder(parseInt(evt.target.value), numberHolderSize);
  indicatorBaseSize = parseInt(evt.target.value);
});
