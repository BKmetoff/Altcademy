var subTotal = function (price, quantity) {
  return parseFloat(price) * parseFloat(quantity)
}

var udpateSubTotal = function (rowNumber) {

  var currentRow = '#row' + rowNumber;
  $(document).on('input', currentRow + ' input', function (event) {

    var price = $(currentRow + ' .price').html();
    var newQuantity = parseFloat($(currentRow + ' input').val());
    $(currentRow + ' .subTotal').text(price * newQuantity)

    // auto update price on item quantity chage
    getTotalPrice();

  });
}

var totalPrice = function (sum, subTotal) { return sum + subTotal }

var getTotalPrice = function () {
  var listOfSubTotals = [];

  $('.subTotal').each(function (index, element) {
    listOfSubTotals.push(Number($(element).text()))
  });

  $('#totalPrice').html('$ ' + listOfSubTotals.reduce(totalPrice));

}

$(document).ready(function() {

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('.row').remove();

    if ($('.subTotal').length !== 0) {
      // auto-update total price on item removal
      getTotalPrice();
    }
    else {
      // hide total elements if no items on list
      $('#calculateTotalPrice').hide();
      $('#total').hide();
      $('#totalPrice').html('');
    }
  });

  $('#calculateTotalPrice').on('submit', function(event) {
    event.preventDefault();
    getTotalPrice();
  });

  var rowCounter = 1;

  $('#addItem').on('click', function (event) {

    event.preventDefault();

    var item = $('#item').val();
    var price = $('#price').val();

    subTotal(price, 1);

    $('#underListOfItems').before(
      '<div class="row my-1 border-bottom"' + 'id="row' + rowCounter + '">' +
          '<div class="col-4 item">' +
            item +
          '</div>' +
          '<div class="col-2 price">' +
            price +
          '</div>' +
          '<div class="col-2 quantity form-group">' +
            '<input type="number" class="form-control" value="1">' +
          '</div>' +
          '<div class="col-2 subTotal">' +
            subTotal(price, 1) +
          '</div>' +
          '<div class="col-2 text-align: end">' +
            '<button class="btn btn-danger btn-sm remove">remove</button>' +
          '</div>' +
      '</div>'
    )

    $('#item').val('');
    $('#price').val('');

    udpateSubTotal(rowCounter);
    rowCounter++;

    $('#calculateTotalPrice').show();
    $('#total').show();

  });
});
