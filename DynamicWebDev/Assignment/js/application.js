// calculate sub-total per item;

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

    console.log(price);
    console.log(currentRow);

  });
}


$(document).ready(function() {

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    // to do - recalculate total price
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
