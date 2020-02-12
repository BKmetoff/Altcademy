var updateMarketValue = function (el) {

  var sharesOwned = parseFloat($(el).find('.shares input').val());
  var marketPrice = parseFloat($(el).find('.marketPrice input').val());
  var marketValue = sharesOwned * marketPrice;

  $(el).children('.marketValue').html(marketValue);

  return marketValue;
}

var updateUnrealizedProfit = function (el, marketValue) {
  var sharesOwned = parseFloat($(el).find('.shares input').val());
  var costPerShare = parseFloat($(el).find('.cost input').val());
  var costOfPurchase = sharesOwned * costPerShare;

  var unrealizedProfit = marketValue - costOfPurchase;
  $(el).children('.profit').html(unrealizedProfit);

  return unrealizedProfit;
}

$(document).ready(function () {
  udpatePortfolioValueAndProfit();

  $(document).on('click', '.btn.remove', function(event) {
    $(this).closest('tr').remove();
    udpatePortfolioValueAndProfit();
  });


  var timeout;
  $(document).on('input', 'tr input',function (event) {

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      udpatePortfolioValueAndProfit();
    }, 1000);

  });

  $('#addStock').on('submit', function (event) {

    event.preventDefault();

    var name = $(this).children('[name=name]').val();
    var shares = $(this).children('[name=shares]').val();
    var cost = $(this).children('[name=cost]').val();
    var marketPrice = $(this).children('[name=marketPrice]').val();

    $('tbody').append('<tr>' +
    '<td class="name">' + name + '</td>' +
    '<td class="shares"><input type="number" value="' + shares + '" /></td>' +
    '<td class="cost"><input type="number" value="' + cost + '" /></td>' +
    '<td class="marketPrice"><input type="number" value="' + marketPrice + '" /></td>' +
    '<td class="marketValue"></td>' +
    '<td class="profit"></td>' +
    '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
  '</tr>');

  udpatePortfolioValueAndProfit();

  $(this).children('[name=name]').val('');
  $(this).children('[name=shares]').val('');
  $(this).children('[name=cost]').val('');
  $(this).children('[name=marketPrice]').val('');

  });
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
