'use strict';

let CLOUD_WIDTH = 420;
let CLOUD_HEIGHT = 270;
let CLOUD_X = 100;
let CLOUD_Y = 10;
let GAP = 10;
let BAR_GAP = 50;
let FONT_GAP = 16;
let BAR_WIDTH = 40;
let BAR_HEIGHT = 150;

let renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let renderTitle = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + FONT_GAP);
};

let getMaxElement = function (arr) {
  return arr.reduce((maxElement, currentElement) =>  currentElement > maxElement ? currentElement : maxElement);
};

let renderChart = function (ctx, times, players) {
  let maxTime = getMaxElement(times);
  let barX = CLOUD_X + BAR_GAP;
  let barY = CLOUD_HEIGHT - 2 * GAP;

  players.forEach(function (playersCurrent, i) {
    let opacity = Math.random() * (1 - 0.1) + 0.1;

    ctx.fillStyle = playersCurrent === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(10, 135, 255, ' + opacity + ')';
    ctx.fillRect(barX + (BAR_WIDTH + BAR_GAP) * i, barY - GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(playersCurrent, barX + BAR_WIDTH / 2 + (BAR_WIDTH + BAR_GAP) * i, barY);
  });

  times.forEach(function (timesCurrent, i) {
    ctx.fillText(Math.floor(timesCurrent), barX + BAR_WIDTH / 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_GAP + (-BAR_HEIGHT * times[i]) / maxTime);
  });
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, CLOUD_X + CLOUD_WIDTH / 2 + GAP, CLOUD_Y + GAP, '#000');
  renderChart(ctx, times, players);
};
