function displayFields(form,customHTML){
	
	form.setHidePrintLink(true);
	
	var activity = getValue('WKNumState');
	
	customHTML.append('<script>');
	customHTML.append("function getAtividade() { return '" + activity + "' };");
	customHTML.append('</script>');
}