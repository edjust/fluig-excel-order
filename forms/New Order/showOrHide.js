$(document).ready(() => {
	
	$('.measureReportPanel').hide();

    activity = parseInt(getAtividade());

    if(activity == 0){
        $('.approvePanel').hide();
    }
    
    if(activity == 6){
    	$("#yes").prop("checked", true);
    }
    
    if (activity != 28) {
    	$('#download').hide();
    
    }else{
    	$('#observations').prop('readonly', true);
    	$('#yes').prop('disabled', true);
    	$('#no').prop('disabled', true);
    	$('#adjust').prop('disabled', true);
    }
    
    if (activity != 0 && activity != 23) {
    	$('#addProduct').hide();
    	$('.deleteProduct').hide();
    }
    
    if (activity ==  23) {
    	$('#observations').prop('readonly', true);
    	$('#yes').prop('disabled', true);
    	$('#no').prop('disabled', true);
    	$('#adjust').prop('disabled', true);
    	$('.inputAmount').prop('readonly', false);
    	$('.inputPrice').prop('readonly', false);
    }
    
    if (activity == 6 || activity == 26) {
    	$('label[for="code"]').hide();
    	$('label[for="name"]').hide();
    	$('label[for="um"]').hide();
    	$('label[for="amount"]').hide();
    	$('label[for="price"]').hide();
    	$('label[for="totalPrice"]').hide();
    	$('label[for="addProduct"]').hide();
    	$('.removeColumn').hide();
    }
    
    if (activity == 2 || activity == 28 || activity == 32) {
    	$('#provider').prop('readonly', true);
    	$('#approver').prop('readonly', true);
    	$('#orderDate').prop('readonly', true);
    	$('#deliveryDate').prop('readonly', true);
    	$('#po').prop('readonly', true);
    	$('#vessel').prop('readonly', true);
    	$('#buyer').prop('readonly', true);
    	$('label[for="code"]').hide();
    	$('label[for="name"]').hide();
    	$('label[for="um"]').hide();
    	$('label[for="amount"]').hide();
    	$('label[for="price"]').hide();
    	$('label[for="totalPrice"]').hide();
    	$('label[for="addProduct"]').hide();
    	$('.removeColumn').hide();
    	$('#code').hide();
    	$('#name').hide();
    	$('#um').hide();
    	$('#amount').hide();
    	$('#price').hide();
    	$('#totalPrice').hide();
    }
});