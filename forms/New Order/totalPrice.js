$('#amount').change(() => {
	var amount = $('#amount').val();
	var price = $('#price').val();
	
	$('#totalPrice').val(parseFloat(amount * price).toFixed(2));
});

$('#price').change(() => {
	var amount = $('#amount').val();
	var price = $('#price').val();
	
	$('#totalPrice').val(parseFloat(amount * price).toFixed(2));
});

function changeTotal(aOp) {
	var row = aOp.id.split("___").pop();
	
	var totalPrice = Number($('#inputTotalPrice___' + row).val());
	var totalValue = Number($('#totalValue').val());
	
	totalValue -= totalPrice;
	
	var amount = $('#inputAmount___' + row).val();
	var price = $('#inputPrice___' + row).val();
	
	totalPrice = amount * price;
	$('#inputTotalPrice___' + row).val(parseFloat(totalPrice).toFixed(2));
	totalValue += totalPrice;
	$('#totalValue').val(parseFloat(totalValue).toFixed(2))
};