function addChild() {
	
	var code = $('#code').val();
	var name = $('#name').val();
	var um = $('#um').val();
	var amount = $('#amount').val();
	var price = $('#price').val();
	var totalPrice = $('#totalPrice').val();
	
	var totalValue = Number($('#totalValue').val());
	
	var msg = '';
	
	if (code == '') {
	    msg += 'Campo "Código" não informado.\n';

	}else{
	    var length = $('.inputCode').length;
	    for (var i = 0; i < length; i++) {
	        if ($('.inputCode')[i].value == code) {
	            msg += 'Esse produto já foi adicionado.\n'
	        }
	    }
	}
	
	if (name == '') {
		msg += 'Campo "Nome Fantasia" não informado.\n';
	}
	
	if (um == '') {
		msg += 'Campo "UM" não informado.\n';
	}
	
	if (amount == '') {
		msg += 'Campo "Quantidade" não informado.\n';
	}
	
	if (price == '') {
		msg += 'Campo "Preço" não informado.\n';
	}
	
	if (msg != '') {
		FLUIGC.modal({
		    title: 'Erro: Campos vazios',
		    content: msg,
		    id: 'fluig-modal',
		    actions: [{
		        'label': 'Fechar',
		        'autoClose': true
		    }]
		}, function(err, data) {
		    if(err) {
		        // do error handling
		    } else {
		        // do something with data
		    }
		});
		return;
	
	}else{
		if (totalValue == 0) {
			totalValue = amount * price;

		}else totalValue += (amount * price);
		
		$('#totalValue').val(parseFloat(totalValue).toFixed(2));
		
		var row = wdkAddChild('tableProducts');
		
		$('#code').val('');
		$('#name').val('');
		$('#um').val('');
		$('#amount').val('');
		$('#price').val('');
		$('#totalPrice').val('');
		
		$('#inputCode___'+row).val(code);
		$('#inputName___'+row).val(name);
		$('#inputUm___'+row).val(um);
		$('#inputAmount___'+row).val(amount);
		$('#inputPrice___'+row).val(price);
		$('#inputTotalPrice___'+row).val(totalPrice);
	}
}

function deleteChild(deleteProduct) {
	var row = $($(deleteProduct).parent().parent()).find(".inputCode")[0].id.split("___").pop();
	
	/*console.log("Teste:" + teste);
	var size = id.length;
	console.log("Size: " + size);
	var row = '', cont = 0;
	
	if (size == 17) {
		row = id[16];
	
	}else{
		while (size > 17) {
			cont++;
			size--;
		}
		
		for (var i = 16; i < 17 + cont; i++) {
			row += id[i];
		}
	}*/
	
	var totalPrice = Number($('#inputTotalPrice___' + row).val());
	var totalValue = Number($('#totalValue').val());
	
	totalValue -= totalPrice;
	$('#totalValue').val(parseFloat(totalValue).toFixed(2));
	
	fnWdkRemoveChild(deleteProduct);
}