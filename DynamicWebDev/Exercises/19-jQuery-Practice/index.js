var updateMarketValue = function (el) {

  var sharesOwned = parseFloat($(el).children('.shares').text());
  var marketPrice = parseFloat($(el).children('.marketPrice').text());
  var marketValue = sharesOwned * marketPrice;

  $(el).children('.marketValue').html(marketValue);

  return marketValue;
}

var updateUnrealizedProfit = function (el, marketValue) {
  var sharesOwned = parseFloat($(el).children('.shares').text());
  var costPerShare = parseFloat($(el).children('.cost').text());
  var costOfPurchase = sharesOwned * costPerShare;

  var unrealizedProfit = marketValue - costOfPurchase;
  $(el).children('.profit').html(unrealizedProfit);

  return unrealizedProfit;
}

$(document).ready(function () {
  udpatePortfolioValueAndProfit();
});


var udpatePortfolioValueAndProfit = function () {
  var stocksMarketVallues = [];
  var stocksUnrealizedProfits = [];

  $('tbody tr').each(function (index, el){

    var marketValue = updateMarketValue(el);
    stocksMarketVallues.push(marketValue);

    var unrealizedProfit = updateUnrealizedProfit(el, marketValue);
    stocksUnrealizedProfits.push(unrealizedProfit);

  });

  var portfolioMarketValue = stocksMarketVallues.reduce(sum);
  var portfolioUnrealizedProfit = stocksUnrealizedProfits.reduce(sum);

  $('#portfolioValue').html(portfolioMarketValue);
  $('#portfolioProfit').html(portfolioUnrealizedProfit);
}

// abstraction for portfolio value & gain/loss
var sum = function (acc, x) { return acc + x; }
