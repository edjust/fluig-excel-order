function validateForm(form){
		
	var msg = '';
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var currentDate = year + "-" + month + "-" + day;
	var orderDate = form.getValue('orderDate');
	var deliveryDate = form.getValue('deliveryDate');
	
	if (currentDate.length == 8) {
		currentDate = year + "-0" + month + "-0" + day;
	}
	
	if (currentDate.length == 9) {
		var currentDateSplit = currentDate.split('-');
		
		if (currentDateSplit[1].length == 2) {
			currentDate = year + "-" + month + "-0" + day
			
		}else currentDate = year + "-0" + month + "-" + day;
	}
	
	// Header
	
	if (form.getValue('provider') == '') {
		msg += 'Campo "Fornecedor" não informado.\n';
	}
	
	if (orderDate == '') {
		msg += 'Campo "Data do Pedido" não informado.\n';
	}
	
	if (deliveryDate == '') {
		msg += 'Campo "Data de Entrega" não informado.\n';
	}
	
	if (form.getValue('po') == '') {
		msg += 'Campo "PO nº" não informado.\n';
	}
	
	if (form.getValue('vessel') == '') {
		msg += 'Campo "Embarcação" não informado.\n';
	}
	
	if (form.getValue('buyer') == '') {
		msg += 'Campo "Comprador" não informado.\n';
	}
	
	if (orderDate < currentDate) {
		msg += '"Data do Pedido" precisa ser atual.\n'
	}
	
	if (deliveryDate < orderDate) {
		msg += '"Data de Entrega" precisa ser posterior à "Data do Pedido".\n'
	}
	
	/*if (form.getValue('issuedBy') == '') {
		msg += '\nCampo "Emitido por" não informado.';
	}
	
	if (form.getValue('fiscalNote') == '') {
		msg += '\nCampo "Nota Fiscal" não informado.';
	}
	
	if (form.getValue('measureReport') == '') {
		msg += '\nCampo "Relatório Medição" não informado.';
	}
	
	if (form.getValue('comments') == '') {
		msg += '\nCampo "Comentários" não informado.';
	}
	
	if (form.getValue('issueDate') == '') {
		msg += '\nCampo "Data de Emissão" não informado.';
	}*/
	
	
	// Products
	
	var products = form.getChildrenIndexes("tableProducts");
	
	if (products.length == 0){
		msg += 'Nenhum produto foi inserido na tabela de "Produtos".\n';	
	
	}else{
	
		if (form.getValue('code') != '' || form.getValue('name') != '' || form.getValue('um') != '' || 
				form.getValue('amount') != '' || form.getValue('price') != '') {
			
			msg += 'Preencha todos os campos para inserir o produto.\n';
			
			if (form.getValue('code') == '') {
				msg += 'Campo "Código" não informado.\n';
			}
			
			if (form.getValue('name') == '') {
				msg += 'Campo "Nome Fantasia" não informado.\n';
			}
			
			if (form.getValue('um') == '') {
				msg += 'Campo "UM" não informado.\n';
			}
			
			if (form.getValue('amount') == '') {
				msg += 'Campo "Quantidade" não informado.\n';
			}
			
			if (form.getValue('price') == '') {
				msg += 'Campo "Preço" não informado.\n';
			}
		}
	}
	
	// Approval
	
	var activity = getValue('WKNumState');
	var approve = form.getValue('approve');
	
	if (approve == '' && (activity == 2 || activity == 32)) {
		msg += 'Escolha uma opção de "Aprovação".\n';
	}
	
	if ((approve == 'nao' || approve == 'ajustar') && form.getValue('observations') == '') {
		msg += 'Campo "Observações" deve ser preenchido devido a sua opção escolhida.\n';
	}
	
	if (msg != ''){
		throw(msg);
	}
}