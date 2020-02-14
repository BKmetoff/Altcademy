// calculate full price;
// handle full price click & display full price;



var subTotal = function (price, quantity) {
  return parseFloat(price) * parseFloat(quantity)
}

var udpateSubTotal = function (rowNumber) {

  var currentRow = '#row' + rowNumber;
  $(document).on('input', currentRow + ' input', function (event) {

    var price = $(currentRow + ' .price').html();
    var newQuantity = parseFloat($(currentRow + ' input').val());
    $(currentRow + ' .subTotal').text(price * newQuantity)

  });
}

var totalPrice = function (sum, subTotal) { return sum + subTotal }

var getTotalPrice = function () {
  var listOfSubTotals = [];
  $('.subTotal').each(function (index, element) {
    listOfSubTotals.push(Number($(element).text()))
  });

  $('#totalPrice').html('$ ' + listOfSubTotals.reduce(totalPrice));

  // console.log(listOfSubTotals);
  // console.log(listOfSubTotals.reduce(totalPrice));
}


$(document).ready(function() {

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    getTotalPrice();
  });

  $('#calculateTotalPrice').on('submit', function(event) {
    event.preventDefault();
    getTotalPrice();
  });

  var rowCounter = 1;

  $('#addItem').on('submit', function (event) {
    event.preventDefault();

    var item = $(this).children('[name=item]').val();
    var price = $(this).children('[name=price]').val();

    subTotal(price, 1);

    $('tbody').append('<tr id="row' + rowCounter + '">' +
    '<td class="item">' + item + '</td>' +
    '<td class="price">' + price + '</td>' +
    '<td class="quantity"><input type="number" value="1">' + '</td>' +
    '<td class="subTotal">' + subTotal(price, 1) + '</td>' +
    '<td><button class="btn btn-danger btn-sm remove">remove</button></td>' +
    '</tr>');

    $(this).children('[name=item]').val('')
    $(this).children('[name=price]').val('')

    udpateSubTotal(rowCounter);
    rowCounter++;
  });

});
