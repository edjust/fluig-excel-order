function downloadFile() {
	
	var orderDate = $('#orderDate').val();
	var orderDateSplit = orderDate.split('-');
	orderDate = orderDateSplit[2] + '/' + orderDateSplit[1] + '/' + orderDateSplit[0];
	
	var deliveryDate = $('#deliveryDate').val();
	var deliveryDateSplit = deliveryDate.split('-');
	deliveryDate = deliveryDateSplit[2] + '/' + deliveryDateSplit[1] + '/' + deliveryDateSplit[0];
	
	var data = {
			"info": {
				"provider": $('#provider').val(),
				"orderDate": orderDate,
				"deliveryDate": deliveryDate,
				"vessel": $('#vessel').val(),
				"buyer": $('#buyer').val(),
				"po": $('#po').val(),
				"issuedBy": $('#issuedBy').val(),
				"comments": $('#comments').val(),
				"fiscalNote": $('#fiscalNote').val(),
				"issueDate": $('#issueDate').val(),
				"measureReport": $('#measureReport').val()
			},
			
			"product": []
	};
	
	console.log(data);
	
	$('input[name*=inputCode___]').each((index, value) => {
		var row = value.id.split('___').pop();
		data.product.push({
			"code": $('#inputCode___' + row).val(),
			"name": $('#inputName___' + row).val(),
			"um": $('#inputUm___' + row).val(),
			"amount": $('#inputAmount___' + row).val(),
			"price": $('#inputPrice___' + row).val()
		});
	});
	
	var url = 'http://10.135.2.73:3333/api/orders'; // IP localhost
	
	/*$.ajax({
		type: "POST",
		url: url,
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function(){
		    alert('success');
		},
		error: function(){
			alert('failure');
		},
		dataType: 'json'
	});*/
	
	
	var fileName = 'Order';
	var request = new XMLHttpRequest();
	request.open('POST', url);
	request.setRequestHeader('Content-Type', 'application/json');
	request.responseType = 'arraybuffer';
	request.send(JSON.stringify(data));
	
	request.onload = function(e) {
	    if (this.status === 200) {
	        var blob = this.response;
            var downloadLink = window.document.createElement('a');  
            var contentTypeHeader = request.getResponseHeader('Content-Type');
            downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: 
            	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })); // .xlsx format type
            downloadLink.download = fileName;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
	       }
	   };
	   
	
	
	//console.log("Aprovado?: " + $('input[name=approve]:checked').val());
	//$("#download").hide();	
}