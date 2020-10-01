$('#orderDate').blur(() => {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var currentDate = year + "-" + month + "-" + day;
	
	if (currentDate.length == 8) {
		currentDate = year + "-0" + month + "-0" + day;
	}
	
	if (currentDate.length == 9) {
		var currentDateSplit = currentDate.split('-');
		
		if (currentDateSplit[1].length == 2) {
			currentDate = year + "-" + month + "-0" + day
			
		}else currentDate = year + "-0" + month + "-" + day;
	}
	
	var orderDate = $('#orderDate').val();
	
	if (orderDate < currentDate) {
		FLUIGC.modal({
		    title: 'Erro: Data do Pedido',
		    content: '"Data do Pedido" precisa ser atual.',
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
	}
	
});

$('#deliveryDate').blur(() => {
	var orderDate = $('#orderDate').val();
	var deliveryDate = $('#deliveryDate').val();
	
	if (deliveryDate < orderDate) {
		FLUIGC.modal({
		    title: 'Erro: Data de Entrega',
		    content: '"Data de Entrega" precisa ser posterior à "Data do Pedido".',
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
	} 
});